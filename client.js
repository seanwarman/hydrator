import { createSSRApp } from 'vue'
import devalue from '@nuxt/devalue'
import { createPinia } from 'pinia'
import Home from './pages/Home.vue'

createSSRApp(Home).use(createPinia()).mount('#app')
