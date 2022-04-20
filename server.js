import express from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import devalue from '@nuxt/devalue'
import { createPinia } from 'pinia'
import { router } from './router.js'

const pinia = createPinia()
const server = express()
const port = 3000

const getHandler = route => {
  return (req, res) => {
    renderToString(createSSRApp(route.component).use(pinia)).then(html => {
      devalue(pinia.state.value)
      res.send(`
<!DOCTYPE html>
<html>
  <head><title>Hydrate</title></head>
  <body>
    <div id="app">${html}</div>
  </body>
  <script src="/dist/client.web.bundle.js"></script>
  <script>
    window.__HYDRATOR__('${route.path}')
  </script>
</html>
      `)
    })
  }
}






router.forEach(route => {
  server.get(route.path, getHandler(route))
})


server.get('/dist/:file', (req, res) => {
  const { params } = req
  const { file } = params
  res.sendFile(__dirname + '/' + file)
})






server.listen(port, () => {
  console.log(`Hydrate app running on: ${port}`)
})
