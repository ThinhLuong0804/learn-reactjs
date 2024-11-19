import axiosClient from './axiosClient';

const userApi = {
  register(data) {
    const url = '/auth/local/register';
    return axiosClient.post(url, data); // POST request
  },

  getAll(params) {
    const url = '/users';
    return axiosClient.get(url, {
      params: params,
    });
  },

  login(data) {
    const url = '/auth/local/login';
    return axiosClient.post(url, data);
  },
};

export default userApi;
