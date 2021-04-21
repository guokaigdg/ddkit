/*
 * @Author: your name
 * @Date: 2021-04-22 00:14:49
 * @LastEditTime: 2021-04-22 02:36:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /NTGMJ/packages/fmj-front2.0/src/router/index.js
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello  from '../components/Hello';
import page2  from '../components/Main';
import App  from '../components/Hello';

Vue.use(VueRouter)
//定义routes路由的集合，数组类型
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