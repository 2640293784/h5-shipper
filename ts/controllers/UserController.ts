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

@controller('/user')
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
    const data = await this.userService.getData(ctx);
    ctx.body = new SuccessModel(data);
  }

  //   //注册
  // router.post('/signUp',async(ctx:any)=>{
  //   let { username,password } = ctx.request.body
  //   enbcrypt(password)
  //   try {
  //     const registerData = {
  //       username,
  //       password:password,
  //       nick_name:username
  //     }
  //     console.log(registerData)
  //     let res= await add('users',registerData);
  //     if(res){
  //       ctx.status=200;
  //       ctx.response.body = JSON.stringify({
  //         message:'注册成功',
  //       })
  //     }
  //   } catch{
  //     ctx.body = {
  //       message:'注册失败',
  //       status:500,
  //       statusText:'注册失败'
  //     }
  //   }
  // })
  // //登录
  // router.post('/signOut',async(ctx:any)=>{
  //   const { body } = ctx.request
  //   try {
  //     const res= await query('users',body);
  //     const { results } = res
  //     if(results){
  //       ctx.body = {
  //         message:'登录成功',
  //         status:200
  //       }
  //     }
  //   } finally{}
  // })
}
