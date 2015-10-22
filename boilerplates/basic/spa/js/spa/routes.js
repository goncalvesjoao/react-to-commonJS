import Home from './components/Home';
import Layout from './components/Layout';
import ApiDocs from './components/ApiDocs';
import NotFound from './components/NotFound';
import ConfigExample from './components/ApiDocs/ConfigExample';
import DroidsExample from './components/ApiDocs/components/DroidsExample';

const routes = {
  component: Layout,
  childRoutes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: 'api_docs',
      component: ApiDocs,
      childRoutes: [
        {
          path: 'config',
          component: ConfigExample,
        },
        {
          path: 'components',
          childRoutes: [
            {
              path: 'droids',
              component: DroidsExample,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
};

export default routes;
