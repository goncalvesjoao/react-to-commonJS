const routes = {
  component: require('./components/Layout'),
  childRoutes: [
    {
      path: '/',
      component: require('./components/Home'),
    },
    {
      path: 'api_docs',
      component: require('./components/ApiDocs'),
      childRoutes: [
        {
          path: 'config',
          component: require('./components/ApiDocs/ConfigExample'),
        },
        {
          path: 'components',
          childRoutes: [
            {
              path: 'droids',
              component: require('./components/ApiDocs/components/DroidsExample'),
            },
          ],
        },
      ],
    },
    {
      path: '*',
      component: require('./components/NotFound'),
    },
  ],
};

module.exports = routes;
