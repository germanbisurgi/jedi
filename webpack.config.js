const path = require('path')

const common = {
  entry: {
    jedi: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'docs/assets/js'),
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

const docs = Object.assign({}, common, {
  output: {
    path: path.resolve(__dirname, 'docs/assets/js'),
  }
})

const dist = Object.assign({}, common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
  }
})

const tests = Object.assign({}, common, {
  output: {
    path: path.resolve(__dirname, 'tests/codeceptjs/assets/js'),
  }
})

module.exports = [
  docs,
  dist,
  tests
]
