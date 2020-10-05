import { TAGS } from '../config/TAGS';
import { provide, IContext } from '../ioc';
import {  IProductService } from '../interface';
// import { sequelize } from '../config/mysql';
import { ErrorModel, SuccessModel } from '../vo/resModel';

@provide(TAGS.PRODUCT)
class ProductService implements IProductService {
  /**
   * 获取分组,join g,a
   */
  public async getData(ctx: IContext) {
    const result = {
      id: 2,
      title: 'product page',
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
