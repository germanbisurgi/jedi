/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('items')

Scenario('should edit items @items', ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/items')
  I._waitForElement('.jedi-ready')
  I.dontSee('[id="#/0"]')
  I._click('.jedi-array-add')
  I._waitForElement('[id="#/0"]')
  I._waitForElement('.jedi-array-delete')
  I._click('.jedi-array-delete')
  I.dontSee('[id="#/0"]')
})
