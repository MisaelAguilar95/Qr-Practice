/**
 * Kebapize a CamelCase String.
 * ------------------------------
 * @function kebapizeCamel
 * @param {string} str
 * @return {string}
 */
export const kebapizeCamel = function (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Kebapize a CamelCase String.
 * ------------------------------
 * @function kebapizeCamel
 * @param {string} str
 * @return {string}
 */
String.prototype.ucfirst = function () { // eslint-disable-line
  return this.charAt(0).toUpperCase() + this.slice(1)
}
