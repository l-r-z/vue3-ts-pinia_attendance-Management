import { createRouter, createWebHistory } from 'vue-router';
import { isEmptyObj } from '@/utils/index';
import { ElMessage } from 'element-plus';
declare module 'vue-router' {
  interface RouteMeta {
    menu?: boolean;
    title?: string;
    icon?: string;
    auth?: boolean;
  }
}
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'sing',
      component: () => import('@/views/Home/Home.vue'),
      children: [
        {
          path: 'sing', //在线打卡签到
          name: 'sing',
          component: () => import('@/views/Sign/Sign.vue'),
          meta: {
            menu: true,
            title: '在线打卡签到',
            icon: 'calendar',
            auth: true,
          },
        },
        {
          path: 'exception', //异常考勤查询
          name: 'exception',
          component: () => import('@/views/Exception/Exception.vue'),
          meta: {
            menu: true,
            title: '异常考勤查询',
            icon: 'warning',
            auth: true,
          },
        },
        {
          path: 'apply', //添加考勤审批
          name: 'apply',
          component: () => import('@/views/Apply/Apply.vue'),
          meta: {
            menu: true,
            title: '添加考勤审批',
            icon: 'document-add',
            auth: true,
          },
        },
        {
          path: 'check', //我的考勤审批
          name: 'check',
          component: () => import('@/views/Check/Check.vue'),
          meta: {
            menu: true,
            title: '我的考勤审批',
            icon: 'finished',
            auth: true,
          },
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/Login.vue'),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  // 有权限接口
  const { usersStrore } = useStore();
  // 需要权限并且没有用户信息
  if (to.meta.auth && isEmptyObj(usersStrore.userInfo)) {
    // 有登录
    if (usersStrore.token) {
      // 获取用户信息
      const res = await usersStrore.getUserInfo();
      // if (res.data.errcode === 0) {
      usersStrore.userInfo = res.data.infos;
      console.log('获取用户信息成功--', res.data.infos);
      next();
      // }
      // else {
      //   // 登录token失效了,在响应拦截做处理,其它位置也需要用到
      //   ElMessage.error({
      //     message: '登录失效请重新登录认证',
      //     onClose() {
      //       next({
      //         path: '/login',
      //       });
      //     },
      //   });
      // }
    } else {
      next({
        path: '/login',
        query: {
          back: to.fullPath,
        },
      });
    }
  } else {
    // 没有权限页面直接放行

    // 已经登录了,不再允许去login页面;否则放行
    if (usersStrore.token && to.fullPath.toLocaleLowerCase() === '/login') {
      next('/');
    } else {
      next();
    }
  }
});
export default router;
