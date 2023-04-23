import { createApp } from 'vue'
import App from './App.vue'
import './styles/css/main.css'
import * as VueRouter from 'vue-router'

import HomePage from './pages/HomePage.vue'
import GalleryPage from './pages/GalleryPage.vue'
import MuseDetailsPage from './pages/MuseDetailsPage.vue'
import OlgaPage from './pages/OlgaPage.vue'
import MarieTheresePage from './pages/MarieTheresePage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
            path: '/',
            component: HomePage,
        }, {
            path: '/gallery',
            component: GalleryPage,
        }, {
            path: '/gallery/:paintingId',
            component: MuseDetailsPage,
        }, {
            path: '/olga',
            component: OlgaPage,
        }, {
            path: '/marie-therese',
            component: MarieTheresePage,
        },{
            path: '/:pathMatch(.*)*',
            component: NotFoundPage,
        }
    ]
}))
.mount('#app')
