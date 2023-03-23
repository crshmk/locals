/**
 * @param email String
 * @return Boolean
 *
 * test is here 
 * https://github.com/crshmk/use-email/blob/master/src/__tests__/isEmail.test.js
*/
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const isEmail = email => emailRegex.test(email)
