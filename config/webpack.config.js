const path = require('path')
const merge = require('deepmerge')

const jedi = {
  entry: {
    jedi: path.resolve(__dirname, '../src/jedi.js')
  },
  output: {
    filename: '[name].js',
    libraryExport: 'default',
    library: 'Jedi',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  mode: 'production',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          configFile: path.resolve(__dirname, '.eslintrc.json'),
          cache: false,
          fix: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime']
        }
      }
    ]
  },
  optimization: {
    minimize: false
  },
  performance: {
    hints: false
  }
}

const dist = merge(jedi, {
  output: {
    path: path.resolve(__dirname, '../dist')
  }
})

const docs = merge(jedi, {
  output: {
    path: path.resolve(__dirname, '../docs/views/js')
  }
})

module.exports = [
  dist,
  docs
]
