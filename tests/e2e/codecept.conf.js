exports.config = {
  tests: './**/*_test.js',
  output: './output',
  include: {
    I: './steps_file.js'
  },
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8282/',
      show: false,
      waitForAction: 500,
      waitForTimeout: 10000,
      windowSize: '1200x600',
      // waitForNavigation: 'load'
    }
  }
}
