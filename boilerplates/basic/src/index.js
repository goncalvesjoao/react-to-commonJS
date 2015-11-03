import config from './config';
import Droids from './components/Droids';

export function setConfig(newConfig) {
  Object.assign(config, newConfig);
}

export { config as config };

export default Droids;
