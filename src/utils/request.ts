import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';
import router from '@/router/index';
const request = axios.create({ baseURL: '/api', timeout: 5000 });

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    typeof config.headers?.set === 'function' &&
      config.headers.set('authorization', useStore().usersStrore.token);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  (response: AxiosResponse<ApiRes, string>) => {
    if (
      response.data.errcode === -1 &&
      response.data.errmsg === 'token error'
    ) {
      console.log('message tokenError 响应拦截器');

      ElMessage.error({
        message: 'token 失效,请重新登录',
        onClose() {
          const { usersStrore } = useStore();
          usersStrore.CLEAR_USERINFO_TOKEN();
          // window.location.replace('/login');
          router.replace({
            path: '/login',
          });
        },
      });
    }
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
