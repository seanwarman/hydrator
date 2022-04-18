import express from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

const port = 3000
const server = express()

  server.get('/', (req, res) => {
    // const app = createAppGlobal(createSSRApp, getComponent)
    // renderToString(app).then(html => {
      res.send(`
<!DOCTYPE html>
<html>
  <head><title>Hydrate</title></head>
  <body>
    <div id="app"></div>
  </body>
  <script src="dist/client.bundle.js"></script>
</html>
      `)
    // })

  // }
})

server.listen(port, () => {
  console.log(`Hydrate app running on: ${port}`)
})
