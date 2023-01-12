import { defineStore } from 'pinia';
import type user from '@/types/storeType/users.d';
// 用户相关处理模块
export default defineStore({
  id: 'userStore',
  state() {
    return {
      token: 'asdxzcafsa',
    };
  },
  getters: {},
  actions: {
    login: (data: user.User) => {
      return request<user.UserRespones>({
        method: 'POST',
        url: 'users/login',
        data,
      });
    },
  },
  persist: {
    storage: localStorage,
    paths: ['token'],
  },
});
