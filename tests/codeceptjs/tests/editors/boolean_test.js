/* global Feature Scenario */
const theme = process.env.THEME || 'wireframe'

Feature('boolean')

Scenario('should have @title and @description', ({ I }) => {
  I.amOnPage('index.html')
  I.fillField('#theme', theme)
  I.fillField('#schemas', 'editors/boolean')
  I._waitForElement('.jedi-ready')
  I._waitForText('Boolean', 'label')
  I._waitForText('The boolean type matches only two special values: true and false. Note that values that evaluate to true or false, such as 1 and 0, are not accepted by the schema.')
})
