import Example from './components/ExampleComponent.vue';
import Sample from './components/SampleComponent.vue';
import Register from './components/Register';
import Users from './components/Users';
import Form1 from './components/Form1';


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
        path: '/form1',
        component: Form1
    }
];