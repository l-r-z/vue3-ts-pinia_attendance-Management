// 通用返回类型声明
// 定义api返回的数据类型
type ApiRes = {
  errcode: number;
  errmsg: string;
};
// type ApiRes<T> = {
//   [P in keyof T]: T[P];
// };
