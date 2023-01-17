declare namespace Sings {
  // 更新打卡信息
  interface signsTime {
    userid: string;
  }

  // 更新打卡信息返回值
  interface signsTimeRes extends ApiRes {
    infos: {
      _id: string; // 打卡信息ID
      userid: string; // 用户ID
      time: { [key in string]: any }; // 打卡时间列表
      detail: { [key in string]: any }; // 出勤情况列表
    };
  }
}
export default Sings;
