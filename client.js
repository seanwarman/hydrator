import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router.js'

// 
// This script runs on the client only.
// It defines a function called __HYDRATOR__ which our tempalate can call
// once it's mounted the browser.
//
// The reason I've done it this way is so I can define the router in one place
// without having to maintain a seperate one in the browser and the server.
//
// You can see it getting called in the template literal in server.js
//

function findComponent(path) {
  return router.find(route => route.path === path).component
}

window.__HYDRATOR__ = path => {
  createSSRApp(findComponent(path)).use(createPinia()).mount('#app')
}
