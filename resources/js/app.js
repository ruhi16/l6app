require('./bootstrap');

import Vue from 'vue';
// window.Vue = require('vue');

import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Example from './components/ExampleComponent.vue';
// const Example = require('./components/ExampleComponent.vue');
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const routes = [
    {
        path:'/example',
        component: Example
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router

    // render: h => h(App)
});
