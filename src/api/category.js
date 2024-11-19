import axiosClient from './axiosClient';

const categoryAPI = {
  getAll(params) {
    const url = '/api/categories';
    return axiosClient.get(url, {
      params: params,
    });
  },
  get(id) {
    const url = `/api/categories/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/api/categories';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/api/categories/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/api/categories/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryAPI;
