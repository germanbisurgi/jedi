/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'parsing/allOf-if-then'

Feature('markdown-annotation')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('Should extract @allOf-if-then and create equivalent nested schema', ({I}) => {
  I._waitForElement('#root-x:disabled')
  I._waitForElement('#root-y:disabled')

  // ["A"]
  I._checkOption('[id="root-choices-0"]')
  I._waitForElement('#root-x:disabled')
  I._waitForElement('#root-y:not(:disabled)')

  // ["B"]
  I._uncheckOption('[id="root-choices-0"]')
  I._checkOption('[id="root-choices-1"]')
  I._waitForElement('#root-x:disabled')
  I._waitForElement('#root-y:not(:disabled)')

  // ["A", "B"]
  I._checkOption('[id="root-choices-0"]')
  I._checkOption('[id="root-choices-1"]')
  I._waitForElement('#root-x:disabled')
  I._waitForElement('#root-y:not(:disabled)')

  // ["C"]
  I._uncheckOption('[id="root-choices-0"]')
  I._uncheckOption('[id="root-choices-1"]')
  I._checkOption('[id="root-choices-2"]')
  I._waitForElement('#root-x:not(:disabled)')
  I._waitForElement('#root-y:not(:disabled)')

  // ["A", "C"]
  I._checkOption('[id="root-choices-0"]')
  I._waitForElement('#root-x:not(:disabled)')
  I._waitForElement('#root-y:not(:disabled)')

  // ["B", "C"]
  I._uncheckOption('[id="root-choices-0"]')
  I._checkOption('[id="root-choices-1"]')
  I._waitForElement('#root-x:not(:disabled)')
  I._waitForElement('#root-y:not(:disabled)')

  // ["A", "B", "C"]
  I._checkOption('[id="root-choices-0"]')
  I._waitForElement('#root-x:not(:disabled)')
  I._waitForElement('#root-y:not(:disabled)')

  // ["A", "B", "C"]
  I._checkOption('[id="root-choices-3"]')
  I._waitForElement('#root-x')
  I._waitForElement('#root-y')
})
