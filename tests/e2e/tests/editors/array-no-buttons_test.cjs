/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'editors/array-no-buttons'

Feature('array')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('@editor @array-no-buttons should no have array buttons', ({I}) => {
  I.waitForInvisible('.jedi-array-add')
  I.waitForInvisible('.jedi-array-delete')
  I.waitForInvisible('.jedi-array-move-up')
  I.waitForInvisible('.jedi-array-move-down')
})
