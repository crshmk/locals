// assumes item to be set can be safely stringified 
import { isNil } from 'ramda'

/**
  * @param String 
  * @return any 
*/
const getItem = k => {
  const item = localStorage.getItem(k)
  return isNil(item) ? undefined : JSON.parse(item)
}

/**
  * @param k String 
  * @param v any 
*/
const setItem = (k, v) => {
  v = JSON.stringify(v)
  localStorage.setItem(k, v)
}

// @param k String 
const unsetItem = k => {
  localStorage.removeItem(k)
}

export const localStorageUtil = {
  getItem,
  setItem,
  unsetItem
}
