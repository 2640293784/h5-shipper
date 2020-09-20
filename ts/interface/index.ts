import { Router, IContext } from '../ioc/index';
 
 
export interface IUserService {
  getData(ctx: IContext): Promise<object>;
}
 
 
export interface IHomeService {
  getData(ctx: IContext): Promise<object>;
  getCarouser(ctx: IContext): Promise<object>;
}
 