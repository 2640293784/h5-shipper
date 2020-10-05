import { Router, IContext } from '../ioc/index';

export interface IUserService {
  getData(ctx: IContext): Promise<object>;
  signUp(ctx: IContext):void;
  // 获取积分
  getIntergral(ctx: IContext): Promise<object>;
  // 积分充值
  rechargeIntergral(ctx: IContext): Promise<object>;
  signIn(ctx: IContext): Promise<UserModel>;
  checkUserExist(username?: string, ctx?: IContext): Promise<object | Boolean>;
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






export interface UserModel {
  id: number|unknown;
  name: string | any;
  passport?: string | any;
}
