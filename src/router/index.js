import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';
import ManageIndex from '../views/ManageIndex/ManageIndex.vue';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: 'Home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/manageIndex',
        name: 'ManageIndex',
        component: ManageIndex,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
