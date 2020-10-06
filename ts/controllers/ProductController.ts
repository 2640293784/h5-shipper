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
  constructor(@inject(TAGS.PRODUCT) private productService: IProductService) {}
  /**
   * 菜单分类列表
   * @param ctx
   * @param next
   */
  @httpGet('/getTypeList')
  private async getTypeList(ctx: IContext, next: () => Promise<any>) {
    const data = await this.productService.getTypeList(ctx);
    if (data) {
      ctx.body = new SuccessModel(data);
    } else {
      ctx.body = new ErrorModel('菜单分类获取失败');
    }
  }
  /**
   * 电影列表
   * @param ctx
   * @param next
   */
  @httpGet('/getMovieList')
  private async getMovieList(ctx: IContext, next: () => Promise<any>) {
    const data = await this.productService.getMovieList(ctx);
    if (data) {
      ctx.body = new SuccessModel(data);
    } else {
      ctx.body = new ErrorModel('电影列表区获取失败');
    }
  }
  /**
   * 生日专区
   * @param ctx
   * @param next
   */
  @httpGet('/getBirthList')
  private async getBirthList(ctx: IContext, next: () => Promise<any>) {
    const data = await this.productService.getBirthList(ctx);

    if (data) {
      ctx.body = new SuccessModel(data);
    } else {
      ctx.body = new ErrorModel('生日专区获取失败');
    }
  }
  /**
   * 水果专区
   * @param ctx
   * @param next
   */
  @httpGet('/getFruitList')
  private async getFruitList(ctx: IContext, next: () => Promise<any>) {
    const data = await this.productService.getFruitList(ctx);

    if (data) {
      ctx.body = new SuccessModel(data);
    } else {
      ctx.body = new ErrorModel('生日专区获取失败');
    }
  }
}
