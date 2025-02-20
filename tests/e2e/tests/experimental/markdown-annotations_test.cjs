/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'experimental/markdown-annotations'

Feature('markdown-annotation')

BeforeSuite(({I}) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
});

Scenario('Should parse @markdown to html', ({I}) => {
  I.waitForText('`markdown` to `html` **title**')
  I.waitForText('`markdown` to `html` **description**')
  I._checkOption('[id="parseMarkdown"]')
  I.waitForText('`markdown` to `html` **title**')
  I.waitForText('`markdown` to `html` **description**')
  I.waitForText('markdown', 'code')
  I.waitForText('html', 'code')
  I.waitForText('description', 'strong')
  I.waitForText('title', 'strong')
})
