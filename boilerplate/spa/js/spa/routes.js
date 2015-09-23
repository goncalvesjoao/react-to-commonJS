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
    },
    {
      path: '*',
      component: require('./components/not_found'),
    },
  ],
};

module.exports = routes;
