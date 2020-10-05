import 'reflect-metadata';
import './ioc/inversify.config';
import { Container, InversifyKoaServer, buildProviderModule } from './ioc';
import { entryMiddlewareSetting } from './utils/middleWare';
import { APP_BASIC } from './config/basic.config';

const container = new Container();
container.load(buildProviderModule());
// create server
const server = new InversifyKoaServer(container);

// serveer setting config
server
  .setConfig(entryMiddlewareSetting)
  .build()
  .listen(APP_BASIC.PORT, () => {
    console.log(`server is running over ${APP_BASIC.PORT} port`);
  });
