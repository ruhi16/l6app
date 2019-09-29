import Example from './components/ExampleComponent.vue';
import Sample from './components/SampleComponent.vue';
import Register from './components/Register';
import Users from './components/Users';
import Login from './components/Login';


export const routes = [{
        path: '/example',
        component: Example,
        
    },
    {
        path: '/sample',
        component: Sample, 
        meta: {
            forAuthUsers: true
        }
    },
    {
        path: '/registeruser',
        component: Register,
        meta:{
            forVisitors: true
        }
        
    },
    {
        path: '/users',
        component: Users,
        meta: {
            forAuthUsers: true
        }
        
    },
    {
        path: '/login',
        component: Login,
        
    }
];