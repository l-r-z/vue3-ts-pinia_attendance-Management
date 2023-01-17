declare namespace News {
  // 获取消息提醒
  interface NewsRemind {
    userid: string;
  }

  // 获取消息提醒返回值
  interface NewsRemindRes extends ApiRes {
    info: {
      _id: string; // 消息提醒ID
      userid: string; // 用户ID
      applicant: boolean; // 申请消息提醒 true代表有新消息
      approver: boolean; // 审批消息提醒 true代表有新消息
    };
  }
  // 更新消息提醒信息详情
  interface newsRemind {
    userid: string; // 用户ID
    applicant: boolean; // 申请消息提醒
    approver: boolean; // 审批消息提醒
  }

  // 更新消息提醒信息详情返回值
  interface newsRemindRes extends ApiRes, NewsRemindRes {}
}
export default News;
