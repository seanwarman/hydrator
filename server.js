import express from 'express'
import { renderToString } from 'vue/server-renderer'
import devalue from '@nuxt/devalue'
import { createPinia } from 'pinia'
import { router, createAppFromPath } from './router.js'


const pinia = createPinia()
const server = express()
const port = 3001

const getHandler = route => {
  return (req, res) => {
    createAppFromPath(route.path).then(app => {
      const pinia = createPinia()
      renderToString(app.use(pinia)).then(html => {
        devalue(pinia.state.value)
        res.send(`
<!DOCTYPE html>
<html>
  <head><title>Hydrate</title></head>
  <body>
    <div id="app">${html}</div>
  </body>
  <script src="/dist/client.web.bundle.js"></script>
  <script src="/dist/pages_${route.name}_vue.web.bundle.js"></script>
  <script>window.__HYDRATOR__('${route.path}')</script>
</html>
      `)
      })
    })
  }
}






router.forEach(route => {
  server.get(route.path, getHandler(route))
})


server.get('/dist/:file', (req, res) => {
  const { params } = req
  const { file } = params

  // We're running node from the dist node build file, 
  // so __dirname resolves to dist/
  res.sendFile(__dirname + '/' + file)
})






server.listen(port, () => {
  console.log(`Hydrate app running on: ${port}`)
})
