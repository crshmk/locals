/**
  * browser console util to get cookies 
  *
  * @return Object 
*/
const split = by => str => str.split(by)

export const getCookies = () =>
  document.cookie.split('; ')
    .map(kv => kv.split('='))
    .reduce((acc, [k, v]) => ({...acc, [k]: v}), {})
