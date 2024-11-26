import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from '@/pages/Home.vue';

// Define your routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
