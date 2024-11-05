/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'

Feature('if-then-else')

Scenario('@constrain-if-then-else validate against @if-then-else-nested-complex', async ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/if-then-else-nested-complex.json')
  I._scrollTo('[data-path="#"]')

  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "grayGoose": {
      "presence": "unknown",
      "nesting": "unknown",
      "pairCount": null
    }
  }))

  I.click('label[for="root-grayGoose-presence-1"]')

  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "grayGoose": {
      "presence": "no",
      "nesting": "no",
      "pairCount": 0
    }
  }))

  I.click('label[for="root-grayGoose-presence-0"]')

  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "grayGoose": {
      "presence": "yes",
      "nesting": "unknown",
      "pairCount": null
    }
  }))

  I.click('label[for="root-grayGoose-nesting-1"]')

  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "grayGoose": {
      "presence": "yes",
      "nesting": "no",
      "pairCount": 0
    }
  }))

  I.click('label[for="root-grayGoose-nesting-0"]')

  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "grayGoose": {
      "presence": "yes",
      "nesting": "yes",
      "pairCount": 0
    }
  }))

  I.fillField('[id="root-grayGoose-pairCount"]', 5)
  I.pressKey('Tab')

  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "grayGoose": {
      "presence": "yes",
      "nesting": "yes",
      "pairCount": 5
    }
  }))

  I.click('label[for="root-grayGoose-nesting-1"]')

  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "grayGoose": {
      "presence": "yes",
      "nesting": "no",
      "pairCount": 0
    }
  }))

  I.click('label[for="root-grayGoose-nesting-2"]')

  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "grayGoose": {
      "presence": "yes",
      "nesting": "unknown",
      "pairCount": null
    }
  }))

  I.click('label[for="root-grayGoose-presence-1"]')

  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "grayGoose": {
      "presence": "no",
      "nesting": "no",
      "pairCount": 0
    }
  }))

  I.click('label[for="root-grayGoose-presence-0"]')
  I.click('label[for="root-grayGoose-nesting-0"]')


  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "grayGoose": {
      "presence": "yes",
      "nesting": "yes",
      "pairCount": 5
    }
  }))
})

Scenario('@constrain-if-then-else validate against @if-then-else-nested', async ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/if-then-else-nested.json')
  I._scrollTo('[data-path="#"]')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "vehicleType": "motorcycle",
    "numWheels": 0
  }))

  I.selectOption('[id="root-vehicleType"]', 'bicycle')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "vehicleType": "bicycle",
    "numPedals": 0
  }))

  I.selectOption('[id="root-vehicleType"]', 'car')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "vehicleType": "car",
    "numDoors": 0
  }))

  I.selectOption('[id="root-vehicleType"]', 'other')
  I.waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    "vehicleType": "other",
    "make": "",
    "model": ""
  }))
})

Scenario('@constrain-if-then-else validate against @if-then-else ', async ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/if-then-else.json')
  I._scrollTo('[data-path="#"]')

  I.selectOption('[id="root-country"]', 'America')
  I.fillField('[id="root-postal_code"]', 'K1M 1M4')
  I.pressKey('Tab')
  I._waitForText('Must match the pattern: "[0-9]{5}(-[0-9]{4})?"')

  I.selectOption('[id="root-country"]', 'Canada')
  I.fillField('[id="root-postal_code"]', '10000')
  I.pressKey('Tab')
  I._waitForText('Must match the pattern: "[A-Z][0-9][A-Z] [0-9][A-Z][0-9]"')

  I.selectOption('[id="root-country"]', 'America')
  I.fillField('[id="root-postal_code"]', '10000')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')

  I.selectOption('[id="root-country"]', 'Canada')
  I.fillField('[id="root-postal_code"]', 'K1M 1M4')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')
})

Scenario('@constrain-if-then-else validate against @if-then', async ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/if-then.json')
  I._scrollTo('[data-path="#"]')

  I.selectOption('[id="root-country"]', 'America')
  I.fillField('[id="root-postal_code"]', 'K1M 1M4')
  I.pressKey('Tab')
  I._waitForText('Must match the pattern: "[0-9]{5}(-[0-9]{4})?"')

  I.selectOption('[id="root-country"]', 'Canada')
  I.fillField('[id="root-postal_code"]', '10000')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')

  I.selectOption('[id="root-country"]', 'America')
  I.fillField('[id="root-postal_code"]', '10000')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')

  I.selectOption('[id="root-country"]', 'Canada')
  I.fillField('[id="root-postal_code"]', 'K1M 1M4')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')
})

Scenario('@constrain-if-then-else validate against @if-else', async ({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I._waitForElement('.jedi-ready')
  I.selectOption('#examples', '../json/validator/if-else.json')
  I._scrollTo('[data-path="#"]')

  I.selectOption('[id="root-country"]', 'America')
  I.fillField('[id="root-postal_code"]', 'K1M 1M4')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')

  I.selectOption('[id="root-country"]', 'Canada')
  I.fillField('[id="root-postal_code"]', '10000')
  I.pressKey('Tab')
  I._waitForText('Must match the pattern: "[A-Z][0-9][A-Z] [0-9][A-Z][0-9]"')

  I.selectOption('[id="root-country"]', 'America')
  I.fillField('[id="root-postal_code"]', '10000')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')

  I.selectOption('[id="root-country"]', 'Canada')
  I.fillField('[id="root-postal_code"]', 'K1M 1M4')
  I.pressKey('Tab')
  I.dontSee('.invalid-feedback')
})
