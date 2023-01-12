import axios from 'axios';
// import type { AxiosRequestConfig, AxiosResponse } from "axios";

const request = axios.create({ baseURL: '/api', timeout: 5000 });
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//#region 处理 get post 等单独请求
// interface Http {
//   get: (
//     url: string,
//     data?: { [index: string]: unknown },
//     config?: AxiosRequestConfig
//   ) => Promise<AxiosResponse>;
//   post: (
//     url: string,
//     data?: { [index: string]: unknown },
//     config?: AxiosRequestConfig
//   ) => Promise<AxiosResponse>;
//   put: (
//     url: string,
//     data?: { [index: string]: unknown },
//     config?: AxiosRequestConfig
//   ) => Promise<AxiosResponse>;
//   path: (
//     url: string,
//     data?: { [index: string]: unknown },
//     config?: AxiosRequestConfig
//   ) => Promise<AxiosResponse>;
//   delete: (
//     url: string,
//     data?: { [index: string]: unknown },
//     config?: AxiosRequestConfig
//   ) => Promise<AxiosResponse>;
// }
// const http: Http = {
//   get(url, data, config) {
//     return request.get(url, { params: data, ...config });
//   },
//   post(url, data, config) {
//     return request.post(url, data, config);
//   },
//   put(url, data, config) {
//     return request.put(url, data, config);
//   },
//   path(url, data, config) {
//     return request.patch(url, data, config);
//   },
//   delete(url, data, config) {
//     return request.delete(url, { data, ...config });
//   },
// };
//#endregion

export default request;
// export default axios.create({ baseURL: "http://api.h5ke.top/" });
