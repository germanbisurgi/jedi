exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  include: {
    I: './steps_file.js'
  },
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080/',
      show: true
    }
  }
}
