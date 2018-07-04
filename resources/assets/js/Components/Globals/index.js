import Vue from 'vue'
import { kebapizeCamel } from '@/Utils'

/**
 * Import all components and registered with its file kebapkized name.
 */
for (let c of [
  require('@/Components/Site/App'),
  require('@/Components/Globals/Navbar'),
  require('@/Components/Globals/ExampleComponent')
]) {
  Vue.component(kebapizeCamel(
    c.__file.substring(
      c.__file.lastIndexOf('/') + 1)
  ).slice(0, -4)
    , c)
}

Vue.component('async', () => import(/* webpackChunkName: "guest-async-component" */'@/Components/Globals/AsyncTestComponent'))
