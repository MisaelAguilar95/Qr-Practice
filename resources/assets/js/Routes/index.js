import Site from '@/Components/Site'
import Route from '@/Routes/Route'
import Auth from '@/Routes/Auth'

/**
 * The Routes of the app in a
 * Route object.
 * ------------------------------
 * @const {Array}
 */
export default [

  /**
   * Register the Site routes.
   */
  Route('/', Site.Welcome, 'welcome'),

  /*
   * Register all the Authentication App routes.
   *
   */
  ...Auth,

  // /*
  //  * Register all the Authentication App routes.
  //  */
  // ...Auth,

  /**
   * Register the Site routes.
   */
  Route('/admin', () => import(/* webpackChunkName: "admin" */'@/Components/Site/Admin/AppAdmin'), 'admin', null, [
    Route('/', () => import(/* webpackChunkName: "admin-dashboard" */'@/Components/Site/Admin/Dashboard'), 'admin.dashboard' )
  ]),

  // /**
  //  * Admin Routes
  //  */
  // Route('/admin', Site.Admin.App, 'admin', { auth: true, admin: true }, [

  //   /**
  //    * Products Search
  //    */
  //   // Route('/', Site.Client.Welcome, 'welcome'),
  // ]),

  // /**
  //  * Register the Client App routes.
  //  */
  // Route('/', Site.Client.App, null, null, [


  //   *
  //    * The Welcome view route.
     
  //   Route('/', Site.Client.Welcome, 'welcome', { guest: true }),

  //   /**
  //    * The Dashboard view route.
  //    */
  //   Route('/dashboard', Site.Client.Dashboard, 'dashboard', { auth: true }),
  /**
   * Handle Error 404
   */
    Route('*', Site.Errors.Error404, '404')
]


/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
function view(name) {
  return function(resolve) {
    require(['@/Components/Site/' + name + '.vue'], resolve);
  }
};
 */
//JSON.stringify(app.__vue__.$router.options.routes)