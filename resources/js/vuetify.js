import '@mdi/font/css/materialdesignicons.css'

import Vue from 'vue';
import Vuetify from 'vuetify';


import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'   //after installing npm install material-design-icons-iconfont -D
// Vue.config.productionTip = false

Vue.use(Vuetify);


export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
});