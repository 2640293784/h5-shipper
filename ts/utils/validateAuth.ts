import { ErrorModel } from '../vo/resModel';
import { Router, IContext } from '../ioc';
import { codeMessage } from '../config/resCode';

export default async (ctx: IContext, next: () => Promise<any>) => {
  // console.log('开始验证  url:', ctx.request.url);
  // console.log('开始验证  session:', ctx.session);
  if (ctx?.session?.username) {
    await next();
    return;
  }
  // console.log('没有登录，验证不过');
  ctx.body = new ErrorModel({ code: 401 });
};
