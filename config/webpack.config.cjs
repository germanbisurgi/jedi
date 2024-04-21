const path = require('path')
const merge = require('deepmerge')

const jedi = {
  entry: {
    jedi: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    filename: '[name].js',
    libraryExport: 'default',
    library: 'Jedi',
    libraryTarget: 'umd',
    globalObject: 'this'

  },
  mode: 'development',
  devtool: 'inline-source-map',
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
    path: path.resolve(__dirname, '../docs/js')
  }
})

module.exports = [
  dist,
  docs
]
