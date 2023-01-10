import request from "@/utils/requeset";
import http from "@/utils/requeset";
// 登录
export const usersLogin = (data: { email: string; pass: string }) => {
  return request({
    method: "POST",
    data,
  });
};

// 获取用户信息
export const usersInfos = (params: string) => {
  return request({
    method: "get",
    headers: {
      authorization: params,
    },
  });
};

export const h = (params: string) => {
  return http.get("1", params);
};
