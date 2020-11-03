import * as dotenv from 'dotenv'
dotenv.config();
import config from './defaults';
import nconf from 'nconf';
const loadConfig = () => {
  const conf = nconf.argv().env();
  const envtype = conf.get('NODE_ENV');

  if (envtype) {
    const envConfig = config[envtype];
    nconf.overrides({ store: { ...envConfig, NODE_ENV: envtype } });
  }

  const defaultConfig = config.default;
  nconf.defaults({ store: defaultConfig });
  return nconf;
};

module.exports = loadConfig();
