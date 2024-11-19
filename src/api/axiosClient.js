import axios from 'axios';
const axiosClient = axios.create({
  // baseURL: 'https://js-post-api.herokuapp.com/',
  baseURL: 'http://localhost:3000/',

  headers: {
    'Content-Type': 'application/json',
  },
});

// interceptors
// Thêm một bộ đón chặn request
axiosClient.interceptors.request.use(
  function (config) {
    // Làm gì đó trước khi request dược gửi đi
    return config;
  },
  function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  },
);

// Thêm một bộ đón chặn response
axiosClient.interceptors.response.use(
  function (response) {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    return response.data;
  },
  function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    const { config, status, data } = error.response;
    const URLS = ['/auth/local/register', '/auth/local/login'];
    if (URLS.includes(config.url) && status === 400) {
      const messageList = data?.message || {};
      throw new Error(messageList);
    }

    return Promise.reject(error);
  },
);

export default axiosClient;
