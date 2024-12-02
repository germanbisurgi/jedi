/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('null')

Scenario('@editor @null should have @title and @description', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', 'editors/null')
  I._waitForElement('.jedi-ready')
  I._scrollTo('[data-path="#"]')
  I._waitForText('When a schema specifies a type of null, it has only one acceptable value: null.')
})
