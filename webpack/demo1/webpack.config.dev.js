const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  mode: 'development',
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
    // 和 hot: true 一起用，否则 css 会加载失败，开发环境
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(
      'process.env.NODE_ENV',
      JSON.stringify('development')
    )
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
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
  devServer: {
    port: 8080,
    hot: true,
    host: '0.0.0.0'
  },
  devtool: 'cheap-eval-source-map'
}

module.exports = config
