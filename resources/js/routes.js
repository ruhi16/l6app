import Example from './components/ExampleComponent.vue';
import Sample from './components/SampleComponent.vue';
import Register from './components/Register';
import Users from './components/Users';
import Login from './components/Login';

import auth from './middleware/auth';
import isSubscribed from './middleware/isSubscribed';


export const routes = [
    {
        path: '/sample',
        name: 'Sample',
        component: Sample, 
        meta: {            
            middleware: [auth]
        },
        children:[{
            path: '/sample/example',
            name: 'Sample.Example',
            component: Example,
            meta:{
                middleware:[auth, isSubscribed]
            }
        }]
    },
    {
        path: '/registeruser',
        component: Register,
        // meta:{
        //     forVisitors: true
        // }
        
    },
    {
        path: '/users',
        component: Users,
        // meta: {
        //     forAuthUsers: true
        // }
        
    },
    {
        path: '/login',
        component: Login,
        
    }
];