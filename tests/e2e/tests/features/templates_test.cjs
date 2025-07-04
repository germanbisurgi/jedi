/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'features/templates'

Feature('templates')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('Should parse title @templates', ({I}) => {
  I._click('.jedi-array-add')
  I._waitForText('My object 1 has title: default', '[data-path="#/0"] .jedi-title')
  I._waitForText('My object 1 has title: default', '[data-path="#/0"] .jedi-description')
})
