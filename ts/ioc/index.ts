import Router from 'koa-router';
import session from 'koa-generic-session';
export { Container, injectable, inject } from 'inversify';

export {
  interfaces,
  controller,
  httpGet,
  httpPost,
  TYPE,
  InversifyKoaServer,
} from 'inversify-koa-utils';

import {
  fluentProvide,
  buildProviderModule,
  provide,
} from 'inversify-binding-decorators';
// import koaSession from 'koa-generic-session';

const validFluentProvide = (type: symbol, id: string) =>
  fluentProvide(type).whenTargetNamed(id).done();

// import Koa from 'koa'
import Koa from 'koa';
interface IContext extends Router.IRouterContext {
  session: session.Session | null;
  readonly sessionOptions: session.SessionOptions | undefined;
}

export { Router, validFluentProvide, buildProviderModule, provide, IContext };
