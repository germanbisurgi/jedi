/* global Feature Scenario */
const theme = process.env.THEME || 'barebones'
const pathToSchema = 'editors/number-range'

Feature('number-range')

BeforeSuite(({ I }) => {
  I.amOnPage(`playground.html?theme=${theme}`)
  I.selectOption('#examples', pathToSchema)
  I._waitForElement('.jedi-ready')
})

Scenario('@editor @number-range should have @title and @description', ({ I }) => {
  I._waitForText('Number Range with Min/Max', '[data-path="#/properties/rangeMinMax"] label')
  I._waitForText('Automatically uses range input when min and max are defined', '[data-path="#/properties/rangeMinMax"] .jedi-description')
})

Scenario('@editor @number-range should have @rangeInput', ({ I }) => {
  I._waitForElement('[data-path="#/properties/rangeMinMax"] input[type="range"]')
  I._waitForElement('[data-path="#/properties/rangeMinMax"] .range-output')
})

Scenario('@editor @number-range should have @defaultValues', ({ I }) => {
  // Check instance values
  I._waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    rangeMinMax: 50,
    rangeInteger: 5,
    rangeExclusive: 0.5,
    rangeMultipleOf: 2.5,
    rangeCustomStep: 25,
    rangeExplicitFormat: 50,
    rangeTemperature: 20,
    rangeVolume: 75
  }))

  // Check editor values
  I._waitForValue('[data-path="#/properties/rangeMinMax"] input[type="range"]', '50')
  I._waitForText('50', '[data-path="#/properties/rangeMinMax"] .range-output')

  I._waitForValue('[data-path="#/properties/rangeInteger"] input[type="range"]', '5')
  I._waitForText('5', '[data-path="#/properties/rangeInteger"] .range-output')
})

Scenario('@editor @number-range should @updateValue on change', ({ I }) => {
  // Change the range value
  I.fillField('[data-path="#/properties/rangeMinMax"] input[type="range"]', '75')
  I.triggerEvent('[data-path="#/properties/rangeMinMax"] input[type="range"]', 'change')

  // Check output displays new value
  I._waitForText('75', '[data-path="#/properties/rangeMinMax"] .range-output')

  // Check instance value updated
  I._waitForValue('[id="jedi-hidden-input"]', JSON.stringify({
    rangeMinMax: 75,
    rangeInteger: 5,
    rangeExclusive: 0.5,
    rangeMultipleOf: 2.5,
    rangeCustomStep: 25,
    rangeExplicitFormat: 50,
    rangeTemperature: 20,
    rangeVolume: 75
  }))
})

Scenario('@editor @number-range should have @minMaxAttributes', ({ I }) => {
  const basicRangeInput = '[data-path="#/properties/rangeMinMax"] input[type="range"]'

  // Check min/max attributes from schema
  I._waitForElement(basicRangeInput)
  I.seeAttributesOnElements(basicRangeInput, { min: '0', max: '100' })
})

Scenario('@editor @number-range should support @integerType', ({ I }) => {
  const integerRangeInput = '[data-path="#/properties/rangeInteger"] input[type="range"]'

  // Check integer range attributes
  I._waitForElement(integerRangeInput)
  I.seeAttributesOnElements(integerRangeInput, { min: '1', max: '10', step: '1' })

  // Test integer value setting
  I.fillField(integerRangeInput, '7')
  I.triggerEvent(integerRangeInput, 'change')
  I._waitForText('7', '[data-path="#/properties/rangeInteger"] .range-output')
})

Scenario('@editor @number-range should support @exclusiveConstraints', ({ I }) => {
  const exclusiveRangeInput = '[data-path="#/properties/rangeExclusive"] input[type="range"]'

  // Check exclusive min/max handling
  I._waitForElement(exclusiveRangeInput)
  // exclusiveMinimum: 0 becomes min: 0.01, exclusiveMaximum: 1 becomes max: 0.99
  I.seeAttributesOnElements(exclusiveRangeInput, { step: '0.01' })
})

Scenario('@editor @number-range should use @multipleOfAsStep', ({ I }) => {
  const multipleOfRangeInput = '[data-path="#/properties/rangeMultipleOf"] input[type="range"]'

  // Check multipleOf becomes step
  I._waitForElement(multipleOfRangeInput)
  I.seeAttributesOnElements(multipleOfRangeInput, { min: '0', max: '10', step: '0.25' })

  // Check default value
  I._waitForValue(multipleOfRangeInput, '2.5')
  I._waitForText('2.5', '[data-path="#/properties/rangeMultipleOf"] .range-output')
})

Scenario('@editor @number-range should support @customStepWithInputAttributes', ({ I }) => {
  const customStepRangeInput = '[data-path="#/properties/rangeCustomStep"] input[type="range"]'

  // Check custom step override via x-inputAttributes
  I._waitForElement(customStepRangeInput)
  I.seeAttributesOnElements(customStepRangeInput, { min: '0', max: '50', step: '2.5' })
})

Scenario('@editor @number-range should support @explicitFormatWithInputAttributes', ({ I }) => {
  const explicitRangeInput = '[data-path="#/properties/rangeExplicitFormat"] input[type="range"]'

  // Check explicit format with custom attributes via x-inputAttributes
  I._waitForElement(explicitRangeInput)
  I.seeAttributesOnElements(explicitRangeInput, { min: '10', max: '90', step: '5' })

  // Check default value
  I._waitForValue(explicitRangeInput, '50')
  I._waitForText('50', '[data-path="#/properties/rangeExplicitFormat"] .range-output')
})

Scenario('@editor @number-range should show @titleIcon', ({ I }) => {
  I._waitForElement('[data-path="#/properties/rangeTemperature"] .fa-thermometer-half')
  I._waitForText('Temperature (°C)', '[data-path="#/properties/rangeTemperature"] label')
})

Scenario('@editor @number-range should support @hiddenTitle', ({ I }) => {
  I.dontSeeElement('[data-path="#/properties/rangeVolume"] label')
  I._waitForElement('[data-path="#/properties/rangeVolume"] input[type="range"]')
})

Scenario('@editor @number-range should support @negativeValues', ({ I }) => {
  const temperatureRangeInput = '[data-path="#/properties/rangeTemperature"] input[type="range"]'

  // Check negative minimum support
  I._waitForElement(temperatureRangeInput)
  I.seeAttributesOnElements(temperatureRangeInput, { min: '-10', max: '40', step: '1' })

  // Test setting negative value
  I.fillField(temperatureRangeInput, '-5')
  I.triggerEvent(temperatureRangeInput, 'change')
  I._waitForText('-5', '[data-path="#/properties/rangeTemperature"] .range-output')
})

Scenario('@editor @number-range should @setValue programmatically', ({ I }) => {
  // Set values programmatically
  I.fillField('#editor-value', JSON.stringify({
    rangeMinMax: 80,
    rangeInteger: 8,
    rangeExclusive: 0.75,
    rangeMultipleOf: 5,
    rangeCustomStep: 37.5,
    rangeExplicitFormat: 65,
    rangeTemperature: 25,
    rangeVolume: 90
  }))
  I._scrollTo('#set-value')
  I._click('#set-value')

  // Check values updated
  I._waitForValue('[data-path="#/properties/rangeMinMax"] input[type="range"]', '80')
  I._waitForText('80', '[data-path="#/properties/rangeMinMax"] .range-output')

  I._waitForValue('[data-path="#/properties/rangeInteger"] input[type="range"]', '8')
  I._waitForText('8', '[data-path="#/properties/rangeInteger"] .range-output')

  I._waitForValue('[data-path="#/properties/rangeTemperature"] input[type="range"]', '25')
  I._waitForText('25', '[data-path="#/properties/rangeTemperature"] .range-output')
})

Scenario('@editor @number-range should @disable', ({ I }) => {
  I._click('#disable-editor')
  I._waitForElement('[data-path="#/properties/rangeMinMax"] input[type="range"]:disabled')
  I._waitForElement('[data-path="#/properties/rangeInteger"] input[type="range"]:disabled')
})

Scenario('@editor @number-range should @enable', ({ I }) => {
  I._click('#enable-editor')
  I.dontSeeElement('[data-path="#/properties/rangeMinMax"] input[type="range"]:disabled')
  I.dontSeeElement('[data-path="#/properties/rangeInteger"] input[type="range"]:disabled')
})

Scenario('@editor @number-range should @destroy', ({ I }) => {
  I._click('#destroy-editor')
  I.dontSeeElement('[data-path="#/properties/rangeMinMax"]')
  I.dontSeeElement('[data-path="#/properties/rangeInteger"]')
})
