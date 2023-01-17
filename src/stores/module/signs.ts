import type Sings from '@/types/storeType/sings';
import { defineStore } from 'pinia';
// 签到相关处理模块
export default defineStore({
  id: 'signStore',
  state() {
    return {};
  },
  getters: {},
  actions: {
    // 更新用户打卡信息
    signsTime: (data: Sings.signsTime) => {
      return request({
        method: 'PUT',
        data,
      });
    },
  },
});
