import Home from './pages/Home.vue'
import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'

//
// This is great because it's in one place, but I should probably have it point
// to paths rather than setting the actual component on the object. That way we
// can have webpack make seperate files for different routes so we don't pull
// in all the components on every page, only the ones the page needs.
//
// Can I have webpack.config pull this object in as a part of it's config?

export const router = [
  {
    path: '/',
    component: Home,
  }
]
