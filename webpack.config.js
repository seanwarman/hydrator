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
  entry: './server.js',
  output: {
    filename: 'server.bundle.js',
  },
  ...common,
}, {
  target: 'web',
  entry: './client.js',
  output: {
    filename: 'client.bundle.js',
  },
  ...common,
}]
