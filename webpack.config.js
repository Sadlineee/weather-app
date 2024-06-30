const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
      clean: true
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[contenthash].[ext]',
                outputPath: 'assets/images'
              },
            },
          ],
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.png'
      }),
      new Dotenv({

      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      runtimeChunk: 'single'
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'build')
      },
      compress: true,
      port: 3000,
      hot: true
    }
  }
}