<template>
  <div>SignView</div>
  <el-button @click="go"></el-button>
</template>

<script setup lang="ts" name="SignView">
// 在线打卡签到页面
const router = useRouter();
const go = () => {
  router.push({
    path: '/exception',
    query: {
      key: 'mykey',
      value: 'xxxvalue',
    },
  });
};
</script>

<style scoped lang="scss"></style>
