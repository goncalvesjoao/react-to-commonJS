import Home from './components/Home';
import Layout from './components/Layout';
import ApiDocs from './components/ApiDocs';
import NotFound from './components/NotFound';
import SetConfigExample from './components/ApiDocs/SetConfigExample';

const routes = {
  component: Layout,
  childRoutes: [
    { path: '/', component: Home },
    { path: '/index.html', onEnter: (nextState, replaceState) => replaceState(null, '/') },
    {
      path: '/api_docs',
      component: ApiDocs,
      childRoutes: [
        {
          path: 'set_config',
          component: SetConfigExample,
        },
      ],
    },
    { path: '*', component: NotFound },
  ],
};

export default routes;
