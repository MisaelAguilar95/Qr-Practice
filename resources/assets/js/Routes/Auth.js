import Route from '@/Routes/Route'
import Site from '@/Components/Site'

/**
 * The Authetication Routes of the app in a
 * Route-object-like array.
 * ------------------------------
 * @const {Array}
 */
export default [

  /**
   * Authentication Routes
   */
  Route('/login', Site.Auth.Login, 'login', { guest: true }),
  Route('/register', Site.Auth.Register, 'register', { guest: true }),
  Route('/password/reset', Site.Auth.PasswordReset, '/password/reset', { auth: true })
]
