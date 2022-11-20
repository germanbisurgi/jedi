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
      waitForAction: 500,
      windowSize: '1200x480'
    }
  }
}
