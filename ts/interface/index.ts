import { Router, IContext } from '../ioc/index';

export interface IUserService {
  getData(ctx: IContext): Promise<object>;
  signUp(ctx: IContext):void;
  signIn(ctx: IContext): Promise<UserModelRes>;
  checkUserExist(username?: string, ctx?: IContext): Promise<object | Boolean>;
  // 获取积分
  getIntergral(ctx: IContext): Promise<object>;
  // 积分充值
  rechargeIntergral(ctx: IContext): Promise<object>;
  // 收货地址
  getAdress(ctx: IContext): Promise<object>;
  // 添加收货地址
  addAdress(ctx: IContext): Promise<object>;
  // 修改收货地址
  updateAdress(ctx: IContext): Promise<object>;
  // 删除收货地址
  delAdress(ctx: IContext): Promise<object>;
  // 切换收货地址
  checkoutAdress(ctx: IContext): void;

}

export interface IHomeService {
  getData(ctx: IContext): Promise<object>;
  getCarouser(ctx: IContext): Promise<object>;
}




export interface IProductService {
  getData(ctx: IContext): Promise<object>;
  getTypeList(ctx: IContext): Promise<object>;
  getMovieList(ctx: IContext): Promise<object>;

}






export interface UserModelRes {
  id: number|unknown;
  name: string | any;
  passport?: string | any;
}
