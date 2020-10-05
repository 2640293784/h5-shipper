import Application = require('koa');
const fs = require('fs');
const path = require('path');
// const morgan = require('koa-morgan');
// const session = require('koa-generic-session');
// var redisStore = require('koa-redis');

const logger = require('koa-logger');
import bodyParser from 'koa-bodyparser';
import { APP_BASIC } from '../config/basic.config';
// const cors = require('koa2-cors'); //跨域处理

// import { REDIS_CONF } from '../config/db';
const koaStatic = require('koa-static');

export const entryMiddlewareSetting = (app: Application) => {
  app.use(koaStatic(APP_BASIC.DIR_STATIC));

  // app.use(
  //   cors({
  //     // origin: function(ctx:Router.IRouterContext) { //设置允许来自指定域名请求
  //     //     if (ctx.url != '/test') {
  //     //         return '*'; // 允许来自所有域名请求
  //     //     }
  //     //     return '*'; //只允许http://localhost:8080这个域名的请求
  //     // },
  //     origin: 'http://localhost:8000',
  //     // origin: '*',
  //     // maxAge: 5, //指定本次预检请求的有效期，单位为秒。
  //     credentials: true, //是否允许发送Cookie
  //     allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
  //     allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
  //     // exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'], //设置获取其他自定义字段
  //   })
  // );

  // add body parser

  app.use(
    bodyParser({
      enableTypes: ['json', 'form', 'text'],
    })
  );

  const ENV = process.env.NODE_ENV;
  if (ENV !== 'production') {
    app.use(
      logger('dev', {
        stream: process.stdout, // 默认配置: 将日志流输出到控制台，precess.stdout
      })
    );
  } else {
    // 若是线上环境
    const logFileName = path.join(__dirname, '../..', 'logs', 'access.log');
    const writeStream = fs.createWriteStream(logFileName, {
      // 创建文件的写入流
      flags: 'a',
    });
    app.use(
      logger('combined', {
        // dev 环境下： 输出
        stream: writeStream, // 传递给一个写入流，将实际的日志写入到这个写入流中
      })
    );
  }

  // app.keys = ['wsyj33000'];
  // app.use(
  //   session({
  //     cookie: {
  //       path: '/',
  //       httpOnly: false,
  //       maxAge: 7 * 24 * 60 * 60 * 1000,
  //       store: redisStore({
  //         all: `${REDIS_CONF.host}:${REDIS_CONF.port}`,
  //       }),
  //     },
  //   })
  // );
};
