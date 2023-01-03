const path = require('path')
const deepmerge = require('deepmerge')

const common = {
  entry: {
    jedi: './src/index.js'
  },
  output: {
    filename: '[name].js',
    libraryExport: 'default',
    library: 'Jedi',
    libraryTarget: 'umd'
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
          configFile: './.eslintrc.json',
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

// const dist = deepmerge(common, {
//   output: {
//     path: path.resolve(__dirname, 'dist')
//   }
// })

const docs = deepmerge(common, {
  output: {
    path: path.resolve(__dirname, 'docs/js')
  }
})

module.exports = [
  // dist,
  docs
]
