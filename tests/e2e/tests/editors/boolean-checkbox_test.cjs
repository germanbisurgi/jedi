/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('boolean')

Scenario('@editor @boolean-checkbox should have @title and @description', ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', 'editors/boolean-checkbox')
  I._waitForElement('.jedi-ready')
  I._waitForText('Boolean', 'label')
  I._waitForText('The boolean type matches only two special values: true and false. Note that values that evaluate to true or false, such as 1 and 0, are not accepted by the schema.')
})
