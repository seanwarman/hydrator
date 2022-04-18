import express from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { router } from './router.js'

const port = 3000
const server = express()

const createAppGlobal = function(createSSRApp, getComponent) {
  return createSSRApp(getComponent())
}

const createAppGlobalToString = () => createAppGlobal
    .toString()
    .replace(/[\n\s]+/g, ' ')


function renderApp(getComponent) {
  return (req, res) => {
    const app = createAppGlobal(createSSRApp, getComponent)
    renderToString(app).then(html => {
      res.send(`
<!DOCTYPE html>
<html>
  <head><title>Vue SSR Example</title></head>
  <script src="https://unpkg.com/vue@3"></script>
  <body>
    <div id="app">${html}</div>
  </body>
  <script async>
    const { createSSRApp } = Vue
    const createAppGlobal = ${createAppGlobalToString()}
    const getComponent = ${getComponent}

    createAppGlobal(createSSRApp, getComponent).mount('#app')

  </script>
</html>
      `)
    })

  }
}

router.forEach(({ path, component: getComponent }) =>
  server.get(path, renderApp(getComponent)))

server.listen(port, () => {
  console.log(`Vue app running on: ${port}`)
})
