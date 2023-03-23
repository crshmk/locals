/**
  * @param String 
  * @return String 
*/
export const ucFirst = x =>
  typeof x !== 'string' ? '' : x.charAt(0).toUpperCase() + x.slice(1)
