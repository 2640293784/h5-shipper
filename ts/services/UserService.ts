import { TAGS } from '../config/TAGS';
import { provide, IContext } from '../ioc';
import { IUserService } from '../interface';
import { sequelize } from '../config/mysql';
import { ErrorModel, SuccessModel } from '../vo/resModel';

@provide(TAGS.USER)
class ManageService implements IUserService {
  /**
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
}
