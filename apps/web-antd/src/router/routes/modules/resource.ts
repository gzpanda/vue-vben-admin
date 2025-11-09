import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:database',
      order: 9997,
      title: '资源管理',
    },
    name: 'Resource',
    path: '/resource',
    children: [
      {
        path: '/resource/healthcare',
        name: 'Healthcare',
        meta: {
          icon: 'mdi:office-building-cog',
          title: '医疗机构',
        },
        component: () => import('#/views/resource/healthcare/list.vue'),
      },
      {
        path: '/system/menu',
        name: 'SystemMenu',
        meta: {
          icon: 'mdi:contacts',
          title: '通讯录',
        },
        component: () => import('#/views/resource/contact/index.vue'),
      },
    ],
  },
  {
    path: '/resource/healthcare/:id',
    name: 'HealthcareDetail',
    meta: {
      icon: 'mdi:hospital-building',
      title: '医疗机构详情',
      hideInMenu: true,
    },
    component: () => import('#/views/resource/healthcare/detail.vue'),
  },
];

export default routes;
