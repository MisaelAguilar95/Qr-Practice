import Route from '@/Routes/RouteMaker'
import Site from '@/Components/Site'

/**
 * The Guest Routes of the app in a
 * Route-object-like array.
 * ------------------------------
 * @const {Array}
 */
export default [
  /*
   * Register all the Authentication App routes.
   */
  ...Auth,
  Route('/', Site.Welcome, 'welcome', { auth: true })
]
