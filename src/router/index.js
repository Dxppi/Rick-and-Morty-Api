import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LocationsPage from '../views/Locations-Page.vue'
import EpisodesPage from '../views/Episodes-Page.vue'
import CharacterPage from '../views/Character-About.vue'
import EpisodesAbout from '../views/Episodes-About.vue'
import LocationsAbout from '../views/location-About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/character/:id?',
      name: 'characterAbout',
      component: CharacterPage
    },
    {
      path: '/locations/',
      name: 'locations',
      component: LocationsPage
    },
    {
      path: '/episodes/',
      name: 'episodes',
      component: EpisodesPage
    },
    {
      path: '/episode/:id?',
      name: 'episode',
      component: EpisodesAbout
    },
    {
      path: '/location/:id?',
      name: 'location',
      component: LocationsAbout
    },
  ]
})

export default router
