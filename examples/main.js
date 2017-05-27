import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import zMoon from '../src/index';
// import locale from '../src/locale/lang/en-US';
import locale from '../src/locale/lang/zh-CN';

Vue.use(VueRouter);
Vue.use(zMoon, {locale});

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect:to =>{
                return '/icon';
        }},
        {
            path: '/icon',
            component: require('./routers/icon.vue')
        },
        {
            path: '/button',
            component: require('./routers/button.vue')
        },
        {
            path: '/input',
            component: require('./routers/input.vue')
        },
        {
            path: '/radio',
            component: require('./routers/radio.vue')
        },
        {
            path: '/checkbox',
            component: require('./routers/checkbox.vue')
        },
        {
            path: '/select',
            component: require('./routers/select.vue')
        }
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
