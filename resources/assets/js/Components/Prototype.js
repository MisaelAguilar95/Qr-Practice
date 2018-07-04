import Vue from 'vue'

/**
 * Shortcut to make object route
 * like for the 'router-link' tag.
 * ------------------------------
 * @function
 * @param name {String}
 * @param params {Object}s
 * @return {Object}
 */
Vue.prototype.$ = function () {

}

/**
 * Shortcut to make object route
 * like for the 'router-link' tag.
 * ------------------------------
 * @function
 * @param name {String}
 * @param params {Object}s
 * @return {Object}
 */
Vue.prototype.$go = function (name, params) {
  return this.$router.push({name, params})
}

/**
 * TODO translate function
 *
 * ------------------------------
 * @function
 * @param toTranslate {String}
 * @return {String}
 */
Vue.prototype.__ = function (toTranslate) {
  return toTranslate
}
