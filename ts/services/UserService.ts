import { TAGS } from '../config/TAGS';
import { provide, IContext } from '../ioc';
import { IUserService } from '../interface';
import { sequelize } from '../config/mysql';
import { ErrorModel, SuccessModel } from '../vo/resModel';
import { QueryTypes, Transaction } from 'sequelize';
import { UserModelRes } from '../interface/index';
import UserModel from '../models/user.model';
import AddrModel from '../models/addrs.model';
import IntergralModel from '../models/intergral.model';

@provide(TAGS.USER)
class UserService implements IUserService {
  /**
   * 收货地址列表
   * @param ctx
   */
  public async getAdress(ctx: IContext): Promise<object> {
    const userId = ctx.session.userId;
    try {
      let result = await sequelize.models.AddrModel.findAll({
        where: {
          uid: userId,
        },
      });
      if (result) {
        return result;
      }
      return null;
    } catch (error) {}
  }
  /**
   * 积分充值
   * @param ctx
   */
  public async rechargeIntergral(ctx: IContext): Promise<object> {
    const userId = ctx.session.userId;
    let { nums } = ctx.request.body;
    nums = Number(nums);

    try {
      const userIntergral = <IntergralModel>(
        await sequelize.models.IntergralModel.findOne({
          where: {
            uid: userId,
          },
          // raw: true,
        })
      );
      let balance = userIntergral.get('balance');
      console.log('当前的积分为:', balance);
      balance += nums;

      // save balance
      userIntergral.balance = balance;

      const saveResult = await userIntergral.save();

      console.log('积分更新结果', saveResult);
      if (saveResult) {
        return saveResult;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
   * 获取积分
   * @param ctx
   */
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
  /**
   * 登录
   * @param ctx
   */
  public async signIn(ctx: IContext): Promise<UserModelRes> {
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
  /**
   * 注册
   * @param ctx
   */
  public async signUp(ctx: IContext) {
    let { username, password } = ctx.request.body;

    const transaction = await sequelize.transaction().then((t: Transaction) => {
      return  (
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
          // type:UserModel
          .then((userTable) => {
            let uid = userTable.get('id');
            let balance = 500;
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
          })
          .then((data) => {
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
  /**
   * 添加收货地址
   * @param ctx
   */
  public async addAdress(ctx: IContext): Promise<object> {
    const userId = ctx.session.userId;

    let {
      province_id,
      city_id,
      county_id,
      province,
      city,
      county,
      detail_locatoin,
      name,
      tel,
      remember: checked,
      postalCode: postal_code,
    } = ctx.request.body;

    let rawParams = {
      province_id,
      city_id,
      county_id,
      province,
      city,
      county,
      detail_locatoin,
      name,
      tel,
      // checked,
      postal_code,
      uid: userId,
    };

    try {
      let result = null;
      // 暂不分析选没选中
      result = await sequelize.models.AddrModel.create(rawParams);
      if (result) {
        return result;
      }
      return null;
    } catch (error) {}

    return null;
  }
  /**
   * 更新收货地址
   * @param ctx
   */
  public async updateAdress(ctx: IContext): Promise<object> {
    const userId = ctx.session.userId;

    let {
      province_id,
      city_id,
      county_id,
      province,
      city,
      county,
      detail_locatoin,
      name,
      tel,
      remember: checked,
      postalCode: postal_code,
      id,
    } = ctx.request.body;

    let rawParams = {
      province_id,
      city_id,
      county_id,
      province,
      city,
      county,
      detail_locatoin,
      name,
      tel,
      // checked,
      postal_code,
      uid: userId,
      id,
    };

    try {
      let result = null;
      result = await sequelize.models.AddrModel.update(rawParams, {
        where: {
          uid: userId,
          id,
        },
      });
      if (result) {
        return result;
      }
      return null;
    } catch (error) {}

    return null;
  }
  /**
   * 删除收货地址
   * @param ctx
   */
  public async delAdress(ctx: IContext): Promise<object> {
    const userId = ctx.session.userId;

    let { id } = ctx.request.body;

    let rawParams = {
      id,
      uid: userId,
    };

    try {
      let result = null;

      let sql = `
      　　DELETE FROM addrs_tbl WHERE id =${id} AND uid=${userId} ;
      `;

      result = await sequelize.query(sql);

      if (result) {
        return result;
      }
      return null;
    } catch (error) {}

    return null;
  }

  /**
   * 切换收货地址
   * @param ctx
   */
  public async checkoutAdress(ctx: IContext) {
    const userId = ctx.session.userId;
    let { id } = ctx.request.body;

    let userTable = await sequelize.models.UserModel.findOne({
      where: { id: userId },
    });
    let oldCheckedId = userTable.get('addr_id');
    const transaction = await sequelize.transaction().then((t: Transaction) => {
      return sequelize.models.AddrModel.update(
        { checked: true },
        {
          where: { id },
        }
      )
        .then((addrTable) => {
          return sequelize.models.UserModel.update(
            { addr_id: id },
            { where: { id: userId } }
          );
        })

        .then((unkwonwTable) => {
          console.log(
            'unkonwTable的父类xxxxxxxxxxxxxxxxxxxxxxxx:=======:',
            unkwonwTable.constructor
          );
          if (oldCheckedId !== null) {
            return sequelize.models.AddrModel.update(
              { checked: false },
              { where: { id: oldCheckedId } }
            );
          }
          return unkwonwTable;
        })

        .then((data) => {
          if (data) {
            if (data) {
              ctx.body = new SuccessModel('收货地址切换成功');
            } else {
              ctx.body = new ErrorModel('收货地址切换失败');
            }
          }
          // return data;
        })
        .then(t.commit.bind(t))
        .catch(t.rollback.bind(t));
    });
  }

  // ============================= tools ==========================================

  public async checkoutAddrs() {}

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
