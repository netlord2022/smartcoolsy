import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import Products from "../pages/Products.vue"
import About from "../pages/About.vue"
import Contact from "../pages/Contact.vue"
import Gallery from "../pages/Gallery.vue"
import Items from "../pages/Items.vue"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/products", name: "Products", component: Products },
  { path: "/about", name: "About", component: About },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/gallery", name: "Gallery", component: Gallery },
  { path: "/items", name: "Items", component: Items },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If user used browser back/forward buttons
    if (savedPosition) {
      return savedPosition
    } else {
      // Always scroll to top
      return { top: 0 }
    }
  },
})

export default router
