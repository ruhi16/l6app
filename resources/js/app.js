require('./bootstrap');

import Vue from 'vue';
// window.Vue = require('vue');

import VueRouter from 'vue-router';
import {routes} from './routes';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(VueRouter);
Vue.use(Vuetify);


Vue.config.productionTip = false

// const Example = require('./components/ExampleComponent.vue');
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const router = new VueRouter({
    routes,
    mode:'history'  //mode: 'hash'
});

const app = new Vue({
    el: '#app',
    router,

    // render: h => h(App)
});
