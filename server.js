import express from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import devalue from '@nuxt/devalue'
import { createPinia } from 'pinia'
import Home from './pages/Home.vue'

const pinia = createPinia()
const server = express()
const port = 3000

const getHandler = component => {
  return (req, res) => {
    renderToString(createSSRApp(Home).use(pinia)).then(html => {
      devalue(pinia.state.value)
      res.send(`
<!DOCTYPE html>
<html>
  <head><title>Hydrate</title></head>
  <body>
    <div id="app">${html}</div>
  </body>
  <script src="/dist/client.bundle.js"></script>
</html>
      `)
    })
  }
}







server.get('/', getHandler(Home))

server.get('/dist/:file', (req, res) => {
  const { params } = req
  const { file } = params
  res.sendFile(__dirname + '/' + file)
})






server.listen(port, () => {
  console.log(`Hydrate app running on: ${port}`)
})
