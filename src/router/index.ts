import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from '@/pages/Home.vue';
// import About from './views/About.vue';
// import Services from './views/Services.vue';
// import Contact from './views/Contact.vue';

// Define your routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: About,
    // },
    // {
    //     path: '/services',
    //     name: 'Services',
    //     component: Services,
    // },
    // {
    //     path: '/contact',
    //     name: 'Contact',
    //     component: Contact,
    // },
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
