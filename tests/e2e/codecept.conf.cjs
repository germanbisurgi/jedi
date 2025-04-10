const show = process.env.SHOW || false

exports.config = {
  tests: './**/*_test.cjs',
  output: './output',
  include: {
    I: './steps_file.cjs'
  },
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8181/',
      show: show,
      waitForAction: 1500,
      waitForTimeout: 5000,
      windowSize: '1200x3000',
      restart: false,
      waitForNavigation: [ 'load', 'networkidle0' ],
      chrome: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai'
    }
  }
}
