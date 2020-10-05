import {
  interfaces,
  controller,
  httpGet,
  inject,
  Router,
  validFluentProvide,
  TYPE,
  IContext,
  httpPost,
} from '../ioc/index';
import { TAGS } from '../config/TAGS';
import { IProductService } from '../interface';
import checkLogin from '../utils/validateAuth';
import { SuccessModel, ErrorModel } from '../vo/resModel';
import { APP_BASIC } from '../config/basic.config';

@controller(`/${APP_BASIC.VERSION}/api/product`)
@validFluentProvide(TYPE.Controller, 'ProductControler')
export class ProductControler implements interfaces.Controller {
  constructor(@inject(TAGS.PRODUCT) private homeService: IProductService) {}

  @httpGet('/test')
  private async getMMenu(ctx: IContext, next: () => Promise<any>) {
    const data = await this.homeService.getData(ctx);
    ctx.body = new SuccessModel(data);
  }

}
