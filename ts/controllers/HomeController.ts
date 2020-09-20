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
import { IHomeService } from '../interface';
import checkLogin from '../utils/validateAuth';
import { SuccessModel, ErrorModel } from '../vo/resModel';

@controller('/home')
@validFluentProvide(TYPE.Controller, 'HomeControler')
export class HomeControler implements interfaces.Controller {
  constructor(@inject(TAGS.HOME) private homeService: IHomeService) {}

  @httpGet('/test')
  private async getMMenu(ctx: IContext, next: () => Promise<any>) {
    const data = await this.homeService.getData(ctx);
    ctx.body = new SuccessModel(data);
  }

  @httpGet('/carouser', checkLogin)
  private async getCarouser(ctx: IContext, next: () => Promise<any>) {
    const data = await this.homeService.getCarouser(ctx);
    ctx.body = new SuccessModel(data);
  }
}
