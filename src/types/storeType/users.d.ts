declare namespace Users {
  // 登录类型
  interface User {
    email: string;
    pass: string;
  }
  // 登录返回类型
  interface UserRespones extends ApiRes {
    token: string;
  }

  // 获取用户信息返回类型
  interface UsersInfos extends ApiRes {
    infos: {
      _id: string; // 用户ID
      name: string; // 用户姓名
      head: string; //用户头像
      permission: Array<string>; // 权限路由列表
      approver: [
        // 审批人列表
        {
          _id: string;
          name: string;
        }
      ];
    };
  }

  // 重置回初始数据 无数据类型
  interface usersRegister {}

  // 重置初始数据 返回类型
  interface usersRegisterRes {
    errcode: boolean;
  }
}
export default Users;
