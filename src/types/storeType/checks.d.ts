declare namespace Check {
  // 获取用户审批信息详情
  interface checksApply {
    applicantid: string; // 用户id
  }

  // 获取用户审批信息详情返回值
  interface checksApplyRes extends ApiRes {
    rets: [
      {
        _id: string; // 审批信息ID
        applicantid: string; // 申请人ID
        applicantname: string; // 申请人姓名
        approverid: string; // 审批人ID
        approvername: string; // 审批人姓名
        note: string; // 审批备注
        reason: string; // 审批事由
        state: string; // 审批状态
        time: string[]; // 审批时间
      }
    ];
  }

  // 添加用户审批信息详情
  interface checksApplyAdd {
    applicantid: string; // 申请人ID
    applicantname: string; // 申请人姓名
    approverid: string; // 审批人ID
    approvername: string; // 审批人姓名
    note: string; // 审批备注
    reason: string; // 审批事由
    time: string[]; // 审批时间
  }

  // 添加用户审批信息详情返回值
  interface checksApplyAddRes extends ApiRes {}

  // 更新用户审批
  interface checksApplyUpdata {
    _id: string;
    state: string;
  }

  // 更新用户审批返回值
  interface checksApplyUpdataRes extends ApiRes {}
}

export default Check;
