const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './*.html'
    }])
  ]
}

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
  }

  return config
}
