const routes = {
  path: '',
  component: require('./components/layout'),
  childRoutes: [
    {
      path: '/',
      component: require('./components/home'),
    },
    {
      path: 'api_docs',
      component: require('./components/api_docs'),
      childRoutes: [
        {
          path: 'config',
          component: require('./components/api_docs/config'),
        },
        {
          path: 'components',
          component: require('./components/api_docs/components'),
          childRoutes: [
            {
              path: 'starwars_droids',
              component: require('./components/api_docs/components/starwars_droids'),
            },
          ],
        },
      ],
    },
    {
      path: '*',
      component: require('./components/not_found'),
    },
  ],
};

module.exports = routes;
