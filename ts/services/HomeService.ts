import { TAGS } from '../config/TAGS';
import { provide, IContext } from '../ioc';
import { IHomeService } from '../interface';
// import { sequelize } from '../config/mysql';
import { ErrorModel, SuccessModel } from '../vo/resModel';

@provide(TAGS.HOME)
class HomeService implements IHomeService {
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
