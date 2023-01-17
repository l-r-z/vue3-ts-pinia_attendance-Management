<template>
  <div>ExceptionView</div>
  <el-button @click="go"></el-button>
  {{ route.query.key }}
</template>

<script setup lang="ts" name="ExceptionView">
// 异常考勤查询页面
const router = useRouter();
const route = useRoute();
console.log(route.query.key);

const go = () => {
  router.push({
    path: '/sing',
  });
};
</script>

<style scoped lang="scss"></style>
