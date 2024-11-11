/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('object')

Scenario('@editor-object should sort by @propertyOrder', async ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', '../json/editors/object-propertyOrder.json')
  I._waitForElement('.jedi-ready')

  const labelTexts = await I.executeScript(() => {
    const labels = document.querySelectorAll('.jedi-children-slot label')
    return Array.from(labels).map(label => label.textContent.trim())
  })

  I.assertEqual(labelTexts[0], 'c')
  I.assertEqual(labelTexts[1], 'b')
  I.assertEqual(labelTexts[2], 'a')
})