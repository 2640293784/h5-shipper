import { TAGS } from '../config/TAGS';
import { provide, IContext } from '../ioc';
import { IHomeService } from '../interface';
// import { sequelize } from '../config/mysql';
import { ErrorModel, SuccessModel } from '../vo/resModel';

@provide(TAGS.HOME)
class HomeService implements IHomeService {
  /**
   * 获取分组,join g,a
   */
  public async getData(ctx: IContext) {
    const result = {
      id: 2,
      title: 'home page',
      group: [
        {
          id: 1,
          name: 'item1',
        },
      ],
    };
    return result;
  }
  public async getCarouser(ctx: IContext) {
    const result = {
      id: 2,
      title: 'home getCarouser data',
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
