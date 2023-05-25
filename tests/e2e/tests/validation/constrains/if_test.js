/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('if')

Scenario('@if-then-else validate agaist if-then-else ', async ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/if-then-else')

  I.selectOption('[name="root[country]"]', 'America')
  I.fillField('[name="root[postal_code]"]', 'K1M 1M4')
  I.pressKey('Tab')
  I.waitForElement('.invalid-feedback')
  I.waitForText('Value must match the pattern [0-9]{5}(-[0-9]{4})?.')

  I.selectOption('[name="root[country]"]', 'Canada')
  I.fillField('[name="root[postal_code]"]', '10000')
  I.pressKey('Tab')
  I.waitForElement('.invalid-feedback')
  I.waitForText('Value must match the pattern [A-Z][0-9][A-Z] [0-9][A-Z][0-9].')

  I.selectOption('[name="root[country]"]', 'America')
  I.fillField('[name="root[postal_code]"]', '10000')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')

  I.selectOption('[name="root[country]"]', 'Canada')
  I.fillField('[name="root[postal_code]"]', 'K1M 1M4')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')
})

Scenario('@if-then-else validate agaist if-then', async ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/if-then')

  I.selectOption('[name="root[country]"]', 'America')
  I.fillField('[name="root[postal_code]"]', 'K1M 1M4')
  I.pressKey('Tab')
  I.waitForElement('.invalid-feedback')
  I.waitForText('Value must match the pattern [0-9]{5}(-[0-9]{4})?.')

  I.selectOption('[name="root[country]"]', 'Canada')
  I.fillField('[name="root[postal_code]"]', '10000')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')

  I.selectOption('[name="root[country]"]', 'America')
  I.fillField('[name="root[postal_code]"]', '10000')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')

  I.selectOption('[name="root[country]"]', 'Canada')
  I.fillField('[name="root[postal_code]"]', 'K1M 1M4')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')
})

Scenario('@if-then-else validate agaist if-else', async ({ I }) => {
  I.amOnPage(`${theme}.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.fillField('#schemas', 'validator/if-else')

  I.selectOption('[name="root[country]"]', 'America')
  I.fillField('[name="root[postal_code]"]', 'K1M 1M4')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')

  I.selectOption('[name="root[country]"]', 'Canada')
  I.fillField('[name="root[postal_code]"]', '10000')
  I.pressKey('Tab')
  I.waitForElement('.invalid-feedback')
  I.waitForText('Value must match the pattern [A-Z][0-9][A-Z] [0-9][A-Z][0-9].')

  I.selectOption('[name="root[country]"]', 'America')
  I.fillField('[name="root[postal_code]"]', '10000')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')

  I.selectOption('[name="root[country]"]', 'Canada')
  I.fillField('[name="root[postal_code]"]', 'K1M 1M4')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')
})
