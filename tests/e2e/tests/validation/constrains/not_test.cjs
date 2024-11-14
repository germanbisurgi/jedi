/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('not')

Scenario('@constrain-not should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', 'validator/not')
  I.selectOption('#show-errors', 'always')
  I._scrollTo('[data-path="#/test"]')
  I._waitForText('Must not validate against the provided schema', '[data-path="#/test"]')
  I.fillField('root-test-switcher', 'Number')
  I.dontSee('Must not validate against the provided schema', '[data-path="#/test"]')
})
