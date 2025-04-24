/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('prefixItems')

Scenario('@constraint should validate against @prefixItems', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', 'validator/prefixItems')
  I._waitForElement('.jedi-ready')
  I.selectOption('#show-errors', 'always')
  I._waitForElement('.jedi-ready')
  I._click('[data-path="#"] .jedi-array-add')
  I._click('[data-path="#"] .jedi-array-add')
  I._click('[data-path="#"] .jedi-array-add')
  I._click('[data-path="#"] .jedi-array-add')
  I._waitForElement('[data-path="#/0"][data-type="number"]')
  I._waitForElement('[data-path="#/1"][data-type="string"]')
  I._waitForElement('[data-path="#/2"][data-type="string"]')
  I._waitForElement('[data-path="#/3"][data-type="string"]')
})
