/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('not')

Scenario('should display @not validation errors', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)

  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/not')
  I.checkOption('[id="alwaysShowErrors"]')
  I._scrollTo('[data-path="root.test"]')
  I._waitForText('Must not validate against the provided schema {"type":"string"}', '[data-path="root.test"]')
  I.click('Number')
  I.dontSee('Must not validate against the provided schema {"type":"string"}', '[data-path="root.test"]')
})
