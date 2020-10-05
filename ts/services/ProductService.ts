import { TAGS } from '../config/TAGS';
import { provide, IContext } from '../ioc';
import { IProductService } from '../interface';
// import { sequelize } from '../config/mysql';
import { ErrorModel, SuccessModel } from '../vo/resModel';
import { sequelize } from '../config/mysql';

@provide(TAGS.PRODUCT)
class ProductService implements IProductService {
  public async getMovieList(ctx: IContext): Promise<object> {
    try {
      let result = await sequelize.models.ProductModel.findAll({
        where: {
          type_id: 2,
        },
        raw:true,
        nest:true,
        include: [
          {
            model: sequelize.models.DetailModel,
            // attributes:['']
          },
          {
            model: sequelize.models.TypeModel,
            // attributes:['']
          },
        ],
      });

      console.log('inclue find 结构是:', result);

      if (result) {
        return result;
      }
      return null;
    } catch (error) {}
  }
  /**
   * 类型菜单列表
   * @param ctx
   */
  public async getTypeList(ctx: IContext): Promise<object> {
    try {
      let result = sequelize.models.TypeModel.findAll({
        where: {},
        // limit:3
      });
      if (result) {
        return result;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
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
