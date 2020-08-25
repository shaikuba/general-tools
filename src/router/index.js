import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/mockList'
        },
        {
            path: '/',
            component: () => import('../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: 'dashboard',
                    component: () => import('../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: 'mockList',
                    component: () => import('../components/page/mock/MockList.vue'),
                    meta: { title: 'Mock List' }
                },
                {
                    path: 'createMock',
                    component: () => import('../components/page/mock/MockCreate.vue'),
                    meta: { title: 'Create Mock' }
                },
                {
                    path: 'certs',
                    component: () => import('../components/page/Cert.vue'),
                    meta: { title: 'Certificates' }
                },
                {
                    path: 'upload',
                    component: () => import('../components/page/Upload.vue'),
                    meta: { title: 'File Upload' }
                },
                {
                    path: 'help',
                    component: () => import('../components/page/Help.vue'),
                    meta: { title: 'Contact & help' }
                },
                {
                    path: 'message',
                    component: () => import('../components/page/Message.vue'),
                    meta: { title: 'Message Center' }
                },
                {
                    path: 'icon',
                    component: () => import('../components/page/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    // vue-schart组件
                    path: 'charts',
                    component: () => import('../components/page/BaseCharts.vue'),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: 'drag',
                    component: () => import('../components/page/DragList.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: 'dialog',
                    component: () => import('../components/page/DragDialog.vue'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 权限页面
                    path: 'permission',
                    component: () => import('../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '404',
                    component: () => import('../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '403',
                    component: () => import('../components/page/403.vue'),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import('../components/page/Login.vue')
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
