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
}
export default Users;
