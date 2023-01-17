import { defineStore } from 'pinia';
import type user from '@/types/storeType/users.d';
// 用户相关处理模块
export default defineStore({
  id: 'userStore',
  state() {
    return {
      token: '',
      userInfo: {},
    };
  },
  getters: {},
  actions: {
    // 登录接口
    login: (data: user.User) => {
      return request<user.UserRespones>({
        method: 'POST',
        url: 'users/login',
        data,
      });
    },
    // 获取用户信息
    getUserInfo: () => {
      return request.get<user.UsersInfos>('users/infos');
    },
    // 清除用户信息以及token
    CLEAR_USERINFO_TOKEN() {
      this.token = '';
      this.userInfo = {};
    },
  },
  persist: {
    storage: localStorage,
    paths: ['token'],
  },
});
