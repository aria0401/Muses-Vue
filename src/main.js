import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'

import HomePage from './pages/HomePage.vue'
import MusesPage from './pages/MusesPage.vue'
import MuseDetailsPage from './pages/MuseDetailsPage.vue'

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
            path: '/',
            component: HomePage,
        }, {
            path: '/muses',
            component: MusesPage,
        }, {
            path: '/muses/:museId',
            component: MuseDetailsPage,
        }
    ]
}))
.mount('#app')
