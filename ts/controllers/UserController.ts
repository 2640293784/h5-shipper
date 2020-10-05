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
import { IUserService } from '../interface';
import checkLogin from '../utils/validateAuth';
import { SuccessModel, ErrorModel } from '../vo/resModel';
import { APP_BASIC } from '../config/basic.config';

@controller(`/${APP_BASIC.VERSION}/api/user`)
@validFluentProvide(TYPE.Controller, 'UserController')
export class UserController implements interfaces.Controller {
  constructor(@inject(TAGS.USER) private userService: IUserService) {}

  /**
   * 测试接口,返回对应userID的 menuList
   * @param ctx
   * @param next
   */
  @httpGet('/test')
  private async index(ctx: IContext, next: () => Promise<any>) {
    const data = await this.userService.checkUserExist('adminx');
    console.log('data', data);
    ctx.body = new SuccessModel(data);
  }
  /**
   * 注册
   * @param ctx
   * @param next
   */
  @httpPost('/signUp')
  private async signUp(ctx: IContext, next: () => Promise<object>) {
    const existUser = await this.userService.checkUserExist(null, ctx);

    if (existUser) {
      ctx.body = new ErrorModel('用户已存在');
      return;
    }

    return this.userService.signUp(ctx);

  }
  /**
   * 登录
   * @param ctx
   * @param next
   */
  @httpPost('/signIn')
  private async signIn(ctx: IContext, next: () => Promise<any>) {
    const existUser = await this.userService.checkUserExist(null, ctx);

    if (!existUser) {
      ctx.body = new ErrorModel('用户不存在');
      return;
    }
    const data = await this.userService.signIn(ctx);

    if (data) {
      ctx.session.username = data.name;
      ctx.session.userId = data.id;
      ctx.body = new SuccessModel('登录成功');
    } else {
      ctx.body = new ErrorModel('登录失败');
    }
  }
  /**
   * 退出
   * @param ctx
   * @param next
   */
  @httpGet('/signOut')
  private async signOut(ctx: IContext, next: () => Promise<any>) {
    const data = await this.userService.getData(ctx);
    ctx.body = new SuccessModel('退出功能还为实现');
  }
  /**
   * 获取积分(含用户信息)
   * @param ctx
   * @param next
   */
  @httpGet('/getIntergral', checkLogin)
  private async getIntergral(ctx: IContext, next: () => Promise<any>) {
    const data = await this.userService.getIntergral(ctx);
    if (data) {
      ctx.body = new SuccessModel(data);
    } else {
      ctx.body = new ErrorModel('获取积分失败');
    }
  }
  /**
   * 获取积分(含用户信息)
   * @param ctx
   * @param next
   */
  @httpPost('/rechargeIntergral', checkLogin)
  private async rechargeIntergral(ctx: IContext, next: () => Promise<any>) {
    const data = await this.userService.rechargeIntergral(ctx);
    if (data) {
      ctx.body = new SuccessModel(data);
    } else {
      ctx.body = new ErrorModel('积分充值失败');
    }
  }
  /**
   * 获取收货地址
   * @param ctx
   * @param next
   */
  @httpGet('/getAdress', checkLogin)
  private async getAdress(ctx: IContext, next: () => Promise<any>) {
    const data = await this.userService.getAdress(ctx);
    if (data) {
      ctx.body = new SuccessModel(data);
    } else {
      ctx.body = new ErrorModel('获取地址错误');
    }
  }
  /**
   * 获取收货地址
   * @param ctx
   * @param next
   */
  @httpPost('/addAdress', checkLogin)
  private async addAdress(ctx: IContext, next: () => Promise<any>) {
    const data = await this.userService.addAdress(ctx);
    if (data) {
      ctx.body = new SuccessModel(data);
    } else {
      ctx.body = new ErrorModel('收货地址 添加失败');
    }
  }
  /**
   * 获取收货地址
   * @param ctx
   * @param next
   */
  @httpPost('/updateAdress', checkLogin)
  private async updateAdress(ctx: IContext, next: () => Promise<any>) {
    const data = await this.userService.updateAdress(ctx);
    if (data) {
      ctx.body = new SuccessModel(data);
    } else {
      ctx.body = new ErrorModel('收货地址修改失败');
    }
  }
  /**
   * 获取收货地址
   * @param ctx
   * @param next
   */
  @httpPost('/delAdress', checkLogin)
  private async delAdress(ctx: IContext, next: () => Promise<any>) {
    const data = await this.userService.delAdress(ctx);
    if (data) {
      ctx.body = new SuccessModel(data);
    } else {
      ctx.body = new ErrorModel('收货地址删除失败');
    }
  }
}
