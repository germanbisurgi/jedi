import { v4 } from 'uuid'

export const clone = (thing) => {
  return JSON.parse(JSON.stringify(thing))
}

export const equal = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b)
}

export const different = (a, b) => {
  return JSON.stringify(a) !== JSON.stringify(b)
}

export const isNull = (value) => {
  return value === null
}

export const isSet = (value) => {
  return typeof value !== 'undefined'
}

export const isNotSet = (value) => {
  return typeof value === 'undefined'
}

export const isNumber = (value) => {
  return typeof value === 'number'
}

export const isInteger = (value) => {
  return isNumber(value) && value === Math.floor(value)
}

export const isString = (value) => {
  return typeof value === 'string'
}

export const isBoolean = (value) => {
  return typeof value === 'boolean'
}

export const isArray = (value) => {
  return Array.isArray(value)
}

export const isObject = (value) => {
  return !isNull(value) && !isArray(value) && typeof value === 'object'
}

export const getType = (value) => {
  let type = 'any'

  if (isNumber(value)) {
    type = 'number'
  } else if (isInteger(value)) {
    type = 'integer'
  } else if (isString(value)) {
    type = 'string'
  } else if (isBoolean(value)) {
    type = 'boolean'
  } else if (isArray(value)) {
    type = 'array'
  } else if (isNull(value)) {
    type = 'null'
  } else if (isObject(value)) {
    type = 'object'
  }

  return type
}

export const uuidv4 = () => {
  return v4()
}
