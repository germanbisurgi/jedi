const show = process.env.SHOW || false

exports.config = {
  tests: './**/*_test.cjs',
  output: './output',
  include: {
    I: './steps_file.cjs'
  },
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8282/',
      show: show,
      waitForAction: 500,
      waitForTimeout: 10000,
      windowSize: '1200x600',
      restart: false
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai'
    }
  }
}
