const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const entryPath = path.join(__dirname, 'src')
const outputPath = path.join(__dirname, 'dist')


module.exports = {
  mode: 'development',
  entry: path.join(entryPath, 'app.js'),
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Curso de React',
      template: path.join(entryPath, 'index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.join(entryPath, 'assets'), to: path.join(outputPath, 'assets') }
      ]
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: outputPath,
    historyApiFallback: true
  }
}