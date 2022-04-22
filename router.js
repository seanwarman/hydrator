import { createSSRApp } from 'vue'

export const router = [
  {
    name: 'Home',
    path: '/',
    component: () => import('./pages/Home.vue'),
  }
]

export async function createAppFromPath(path) {
  const { default: component } = await router.find(r => r.path === path).component()
  return createSSRApp(component)
}
