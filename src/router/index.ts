import { createRouter, createWebHistory } from "vue-router";
declare module "vue-router" {
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
      path: "/",
      name: "home",
      redirect: "sing",
      component: () => import("@/views/Home/Home.vue"),

      children: [
        {
          path: "sing", //在线打卡签到
          name: "sing",
          component: () => import("@/views/Sign/Sign.vue"),
          meta: {
            menu: true,
            title: "在线打卡签到",
            icon: "calendar",
            auth: true,
          },
        },
        {
          path: "exception", //异常考勤查询
          name: "exception",
          component: () => import("@/views/Exception/Exception.vue"),
          meta: {
            menu: true,
            title: "异常考勤查询",
            icon: "warning",
            auth: true,
          },
        },
        {
          path: "apply", //添加考勤审批
          name: "apply",
          component: () => import("@/views/Apply/Apply.vue"),
          meta: {
            menu: true,
            title: "添加考勤审批",
            icon: "document-add",
            auth: true,
          },
        },
        {
          path: "check", //我的考勤审批
          name: "check",
          component: () => import("@/views/Check/Check.vue"),
          meta: {
            menu: true,
            title: "我的考勤审批",
            icon: "finished",
            auth: true,
          },
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: import("@/views/Login/Login.vue"),
    },
  ],
});

export default router;
