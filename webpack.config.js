const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const common = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

module.exports = [{
  target: 'node',
  entry: {
    server: './server.js',
  },
  output: {
    filename: '[name].node.bundle.js',
  },
  ...common,
}, {
  target: 'web',
  entry: {
    client: './client.js',
  },
  output: {
    filename: '[name].web.bundle.js',
  },
  ...common,
}]
