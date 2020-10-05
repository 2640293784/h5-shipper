import { TAGS } from '../config/TAGS';
import { provide, IContext } from '../ioc';
import { IUserService } from '../interface';
import { sequelize } from '../config/mysql';
import { ErrorModel, SuccessModel } from '../vo/resModel';
import { QueryTypes } from 'sequelize';
import { UserModel } from '../interface/index';

@provide(TAGS.USER)
class ManageService implements IUserService {
  public async getIntergral(ctx: IContext): Promise<object> {
    const username = ctx.session.username;
    const userId = ctx.session.userId;

    let sql = `
      SELECT u.name as username,u.phone,u.email,u.addr_id, 
      i.id as intergralId,i.balance
      FROM users_tbl u
      join intergrals_tbl i on i.uid=u.id
      WHERE  u.name='${username}' AND u.id=${userId} 
    `;
    console.log('sql string is:', sql);
    try {
      const result = await sequelize.query(sql, {
        raw: true,
        logging: true,
        type: QueryTypes.SELECT,
      });

      if (result.length > 0) {
        return result[0];
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  public async signIn(ctx: IContext): Promise<UserModel> {
    let { username, password } = ctx.request.body;
    let saveResult = null;
    try {
      saveResult = await sequelize.models.UserModel.findAll({
        where: {
          name: username,
          password,
        },
        // raw: true,
      });
      console.log(saveResult);
      if (saveResult.length > 0) {
        let users = saveResult[0];
        let id = await users.get('id');
        let name = await users.get('name');
        return {
          id,
          name,
        };
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
  public async signUp(ctx: IContext) {
    let { username, password } = ctx.request.body;
    // let existUser = await this.checkUserExist(username);
    // if (existUser) {
    //   return existUser;
    // }
    // let saveResult = null;
    // try {
    //   saveResult = await sequelize.models.UserModel.create(
    //     {
    //       name: username,
    //       password,
    //     },
    //     {
    //       raw: true,
    //     }
    //   );
    //   // 注册成功后同时添加积分表
    //   return saveResult;
    // } catch (error) {
    //   throw new Error(error);
    // }

    const transaction = await sequelize.transaction().then((t: any) => {
      return (
        sequelize.models.UserModel.create(
          {
            name: username,
            password,
          },
          {
            raw: true,
            transaction: t,
          }
        )

          // .then((art: any) => {
            
          //   return art;
          //   // return sequelize.models.Arts.create({}, { transaction: t });
          // })
          // type:UserModel
          .then((userTable: any) => {
            let uid = userTable.get('id');
            let balance = 500;
            console.log('用户创建成功userTable', userTable);
            console.log('用户创建成功uid', uid);
            return sequelize.models.IntergralModel.create(
              {
                uid,
                balance,
              },
              {
                raw: true,
                transaction: t,
              }
            );

            // console.log('保存后的值',af);
            // console.log('保存后的值.setDatavalue',af.get('id'));
          })
          .then((data: any) => {
            console.log('注册用户添加积分成功', data);
            if (data) {
              if (data) {
                ctx.body = new SuccessModel('注册成功');
              } else {
                ctx.body = new ErrorModel('注册失败');
              }

            }
            // return data;
          })
          .then(t.commit.bind(t))
          .catch(t.rollback.bind(t))
      );
    });

    // console.log('transaction的值为:',transaction);
    // if(transaction) {
    //   ctx.body = new SuccessModel('注册成功')
    // }else{
    //   ctx.body = new ErrorModel('注册失败')
    // }
  }
  /**
   * 测试数据
   * 获取分组,join g,a
   */
  public async getData(ctx: IContext) {
    // const userId = ctx.session.userId;
    // let seq2 = `
    //   select
    //   g.id as group_id,
    //   g.name,
    //   ga.art_id,
    //   a.title
    //   from groups g
    //   left join group_arts ga on g.id=ga.group_id
    //   left join arts a on a.id=ga.art_id and a.created_id=${userId};
    //   ;
    // `;

    // const result = await sequelize.query(seq2, {
    //   raw: true,
    //   type: QueryTypes.SELECT,
    // });
    const result = {
      id: 2,
      group: [
        {
          id: 1,
          name: 'item1',
        },
      ],
    };
    return result;
  }

  // tools

  public async checkUserExist(
    username: string,
    ctx?: IContext
  ): Promise<object | Boolean> {
    if (!username) {
      username = ctx.request.body.username;
    }
    let result = null;
    try {
      result = await sequelize.models.UserModel.findAll({
        where: {
          name: username,
        },
        raw: true,
      });
      console.log('查询用户结果', result);

      if (result?.length > 0) {
        return result;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
