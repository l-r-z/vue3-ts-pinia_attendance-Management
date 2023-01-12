<template>
  <div>homeView</div>
  <el-button @click="send">请求测试</el-button>
  {{ users }}
</template>

<script setup lang="ts" name="HomeView">
// 后台首页
let send = () => {
  request.post('users/login', {
    email: 'huangrong@imooc.com',
    pass: 'huangrong',
  });
};
const { users } = useStore();
</script>

<style scoped lang="scss"></style>
