import Example from './components/ExampleComponent.vue';
import Sample from './components/SampleComponent.vue';
import Register from './components/Register';
import Users from './components/Users';
import Login from './components/Login';


export const routes = [{
        path: '/example',
        component: Example
    },
    {
        path: '/sample',
        component: Sample
    },
    {
        path: '/registeruser',
        component: Register
    },
    {
        path: '/users',
        component: Users
    },
    {
        path: '/login',
        component: Login
    }
];