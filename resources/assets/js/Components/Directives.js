import Vue from 'vue'

/**
 * Directive for solve problms wiht
 * the prop checked and the vue
 * reactivity.
 * ------------------------------
 * @member {Function}
 * @param {DOM Element} el
 * @param {Object} binding
 */
Vue.directive('checked', function (el, binding) {
  el.checked = binding.value
})
