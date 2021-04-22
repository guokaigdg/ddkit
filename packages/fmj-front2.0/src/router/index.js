import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello  from '../components/Hello';
import page2  from '../components/Main';
import App  from '../components/Hello';

Vue.use(VueRouter)

const routes=[
    {
        path:'/hi',
        name: 'Hello',     //路由名称，
        component: Hello
    },
    {
        path:"/hi2",
        component: page2
    },
    {
        path:"/",
        component: App
    }
]
//实例化VueRouter并将routes添加进去
const router = new VueRouter({
    routes
});

export default router