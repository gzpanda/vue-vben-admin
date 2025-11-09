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
          icon: 'mdi:hospital-building',
          title: '医疗机构',
        },
        component: () => import('#/views/resource/healthcare/index.vue'),
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
];

export default routes;
