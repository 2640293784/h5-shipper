import 'reflect-metadata';
import './ioc/inversify.config';
import { Container, InversifyKoaServer, buildProviderModule } from './ioc';
import { entryMiddlewareSetting } from './utils/middleWare';

const container = new Container();
container.load(buildProviderModule());
// create server
const server = new InversifyKoaServer(container);

// serveer setting config
server
  .setConfig(entryMiddlewareSetting)
  .build()
  .listen(3001, () => {
    console.log(`server is running over 3000 port`);
  });
