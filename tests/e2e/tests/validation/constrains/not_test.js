/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('not')

Scenario('@constrain-not should display validation errors', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/not.json')
  I._checkOption('[id="alwaysShowErrors"]')
  I._scrollTo('[data-path="#/test"]')
  I._waitForText('must NOT be of type object', '[data-path="#/test"]')
  I.fillField('root-test-switcher', 'Number')
  I.dontSee('must NOT be of type object', '[data-path="#/test"]')
})
