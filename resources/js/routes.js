import Example from './components/ExampleComponent.vue';
import Sample from './components/SampleComponent.vue';
import Register from './components/Register'


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
    }
];