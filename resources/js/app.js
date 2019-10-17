require('./bootstrap');

import Vue from 'vue';
// window.Vue = require('vue');

import VueRouter from 'vue-router';
import {routes} from './routes'; // import the defined object routes, from ./routes.js file
import vuetify from './vuetify';
import store from './stores/store';
import axios from 'axios';
import VueAxios from 'vue-axios';

import Navbar from './components/Navbar.vue';
import Carousel from './components/carousel';


Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// const Example = require('./components/ExampleComponent.vue');
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const router = new VueRouter({
    routes,
    mode:'history'  //mode: 'hash'
});

const app = new Vue({
    el: '#app',
    store,
    components:{
        Navbar,  //'nav-bar' : Navbar,  then tag will be <nav-bar />> in welcome.blade.php
        Carousel
    },
    vuetify,
    router,

    // render: h => h(App)
});


// router.beforeEach(
//     (to, from, next)=>{
//         if( to.matched.some(record => record.meta.forAuthUsers) ){            
//             if ( store.getters.getAuthToken ){                                
//                 next();
//             }else{
//                 next({path:'/login'});
//             }
//         }else if( to.matched.some(record => record.meta.forVisitors) ) {
//             if (store.getters.getAuthToken) {                
//                 next({path: '/users'});
//             } else {
//                 next();
//             }
//         }else{
//             console.log('router.beforeEach: not matched with any meta...');
//             next();
//         }
//     }
// );

function middlewarePipeline(context, middleware, index) {
    const nextMiddleware = middleware[index];
    if (!nextMiddleware) {
        return context.next;
    }
    return () => {
        const nextPipeline = middlewarePipeline(
            context, middleware, index + 1
        )
        nextMiddleware({
            ...context, next: nextPipeline
        })
    }
}


router.beforeEach( (to, from, next)=>{
    if( to.meta.middleware ){
        console.log('This is Calling Middleware....');
        const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meata.middleare];
        const context = {to, from, next, store};
        return middleware[0]({
            ...context, 
            next: middlewarePipeline(context, middleware, 1)
        });
        // return next();
    }
    return next();
});