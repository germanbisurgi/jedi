exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  include: {
    I: './steps_file.js'
  },
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8282/',
      show: true,
      windowSize: '1440x9000'
    }
  }
}
