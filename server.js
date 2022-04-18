import express from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import Home from './pages/Home.vue'

const port = 3000
const server = express()

server.get('/dist/:file', (req, res) => {
  const { params } = req
  const { file } = params
  res.sendFile(__dirname + '/' + file)
})

server.get('/', (req, res) => {
  const app = createSSRApp(Home)
  renderToString(app).then(html => {
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
})



server.listen(port, () => {
  console.log(`Hydrate app running on: ${port}`)
})
