<template>
  <div class="login">
    <div class="header">
      <span class="header-logo">
        <i class="iconfont icon-vue"></i>
        <i class="iconfont icon-icon-test"></i>
        <i class="iconfont icon-typescript"></i>
      </span>
      <span class="header-title">在线考勤系统</span>
    </div>
    <div class="desc">
      零基础从入门到进阶，系统掌握前端三大热门技术(Vue、React、TypeScript)
    </div>
    <el-form
      label-width="120px"
      class="formMain"
      :model="ruleForm"
      :rules="rules"
      ref="ruleFormRef"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input type="text" placeholder="请输入邮箱" v-model="ruleForm.email">
        </el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="ruleForm.pass"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          auto-insert-space
          @click="submitFrom(ruleFormRef)"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
    <div class="users">
      <el-row>
        <el-col :span="12" v-for="item in testUser" :key="item.email">
          <h3>
            <span>测试账号,{{ item.email }} </span>
            <el-button @click="autoLogin(item)">一键登录</el-button>
          </h3>
          <p>邮箱 : {{ item.email }}</p>
          <p>密码 : {{ item.pass }}</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts" name="LoginView">
import type { FormInstance, FormRules } from 'element-plus';
import type Users from '@/types/storeType/users';
// Login 登录页面
// 用户密码类型
// interface User {
//   email: string;
//   pass: string;
// }
// const {} =
const router = useRouter();
const route = useRoute();
let ruleForm = reactive<Users.User>({ email: '', pass: '' });
let rules = reactive<FormRules>({
  email: [
    { required: true, message: '请输入你的邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱账号', trigger: 'blur' },
  ],
  pass: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    // { max: 6, min: 4, message: '请输入4-6为验证码' },
  ],
});

// 获取from实例
const ruleFormRef = ref<FormInstance>();

const submitFrom = (formEl: FormInstance | undefined) => {
  if (!formEl) return false;
  formEl.validate(async (flag) => {
    if (flag) {
      console.log('验证成功');
      // 登录操作
      const { usersStrore } = useStore();
      let res = await usersStrore.login(ruleForm);
      usersStrore.token = res.data.token;
      router.push({
        path: (route.query.back as string) || '/',
      });

      // router.push(route.query);
    } else {
      console.log('验证失败');
    }
  });
};

// 定义测试账号
const testUser: Users.User[] = [
  { email: 'huangrong@imooc.com', pass: 'huangrong' },
  {
    email: 'hongqigong@imooc.com',
    pass: 'hongqigong',
  },
];
// 一键登录
const autoLogin = (user: Users.User) => {
  ruleForm.email = user.email;
  ruleForm.pass = user.pass;

  submitFrom(ruleFormRef.value);
};
</script>
<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/login-bg.svg') no-repeat center 100px;
  background-size: 100%;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    height: 44px;
    line-height: 44px;
    font-size: 34px;
    .header-logo {
      .icon-vue,
      .icon-icon-test,
      .icon-typescript {
        margin-right: 5px;
        font-size: inherit;
      }
      .icon-vue {
        color: green;
      }
      .icon-icon-test {
        color: burlywood;
      }
      .icon-typescript {
        color: blue;
      }
    }
    .header-title {
      margin-left: 30px;
      font-weight: 700;
      font-size: 30px;
    }
  }
  .desc {
    margin-top: 30px;
    text-align: center;
    font-size: 16px;
    color: rgba(#000000, 0.45);
  }
  .formMain {
    width: 500px;
    margin: 0 auto;
    padding-top: 50px;
  }
  // 一键登录
  .users {
    width: 500px;
    margin: 60px auto;
    color: rgba(0, 0, 0, 0.65);
    h3 {
      font-size: 16px;
    }
    p {
      margin: 20px;
    }
  }
}
</style>
