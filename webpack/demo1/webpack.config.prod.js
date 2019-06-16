const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const config = {
  mode: 'production',
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextWebpackPlugin('styles.css'),
    new webpack.DefinePlugin(
      'process.env.NODE_ENV',
      JSON.stringify('production')
    )
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },

      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },

      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: ['url-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  devtool: 'source-map'
}
config.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: true
      }
    })
  ]
}
module.exports = config
