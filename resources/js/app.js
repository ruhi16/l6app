require('./bootstrap');

import Vue from 'vue';
// window.Vue = require('vue');

import VueRouter from 'vue-router';
import {routes} from './routes'; // import the defined object routes, from ./routes.js file
import vuetify from './vuetify';

import Navbar from './components/Navbar.vue';


Vue.use(VueRouter);

// const Example = require('./components/ExampleComponent.vue');
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const router = new VueRouter({
    routes,
    mode:'history'  //mode: 'hash'
});

const app = new Vue({
    el: '#app',
    components:{
        Navbar  //'nav-bar' : Navbar,  then tag will be <nav-bar />> in welcome.blade.php
    },
    vuetify,
    router,

    // render: h => h(App)
});
