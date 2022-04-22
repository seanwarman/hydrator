import { createPinia } from 'pinia'
import { createAppFromPath } from './router.js'

window.__HYDRATOR__ = async path => {
  const app = await createAppFromPath(path)
  app.use(createPinia()).mount('#app')
}
