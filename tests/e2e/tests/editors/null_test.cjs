/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('null')

Scenario('@editor-null @description @title should have title and description', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '../json/editors/null.json')
  I._waitForElement('.jedi-ready')
  I._scrollTo('[data-path="#"]')
  I._waitForText('When a schema specifies a type of null, it has only one acceptable value: null.')
})
