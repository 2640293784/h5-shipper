import { TAGS } from '../config/TAGS';
import { provide, IContext } from '../ioc';
import { IProductService } from '../interface';
// import { sequelize } from '../config/mysql';
import { ErrorModel, SuccessModel } from '../vo/resModel';
import { sequelize } from '../config/mysql';
import { QueryTypes } from 'sequelize';
@provide(TAGS.PRODUCT)
class ProductService implements IProductService {
  /**
   * 生日专区
   * @param ctx
   */
  public async getBirthList(ctx: IContext): Promise<object> {
    let sql = `select DISTINCT
    p.id as product_id , p.name as product_name,p.detail_id,
    d.title,d.img_url,d.size,d.unit,d.rid as related_id,
    d.attr_name,d.attr_model,d.attr_l,d.attr_w,d.attr_h,d.attr_unit,d.attr_location,d.attr_send_time
    from products_tbl p
    join details_tbl d on d.id=p.detail_id
    where p.type_id=3  limit 4;
  `;
    try {
      // let result = await this.getMovieListByTypeId(2);
      let result = await sequelize.query(sql, {
        raw: true,
        type: QueryTypes.SELECT,
      });

      if (result) {
        return result;
      }
      return null;
    } catch (error) {}
  }
  /**
   * 水果专区
   * @param ctx
   */
  public async getFruitList(ctx: IContext): Promise<object> {
    let sql = `select DISTINCT
    p.id as product_id , p.name as product_name,p.detail_id,
    d.title,d.img_url,d.size,d.unit,d.rid as related_id
    d.attr_name,d.attr_model,d.attr_l,d.attr_w,d.attr_h,d.attr_unit,d.attr_location,d.attr_send_time,
    from products_tbl p
    join details_tbl d on d.id=p.detail_id
    where p.type_id=6  limit 3;
  `;
    try {
      let result = await sequelize.query(sql, {
        raw: true,
        type: QueryTypes.SELECT,
      });

      if (result) {
        return result;
      }
      return null;
    } catch (error) {}
  }
  /**
   *  电影专区
   * @param ctx
   */
  public async getMovieList(ctx: IContext): Promise<object> {
    let sql = `select DISTINCT
      p.id as product_id , p.name as product_name,
      d.id as detail_id,
      m.*
      from products_tbl p
      join details_tbl d on d.id=p.detail_id
      join movie_details_tbl m  on m.id=d.movie_id
      where p.type_id=2 limit 10;
    `;
    try {
      // let result = await this.getMovieListByTypeId(2);
      let result = await sequelize.query(sql, {
        raw: true,
        type: QueryTypes.SELECT,
      });

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
      let result = await sequelize.models.TypeModel.findAll({
        where: { used: 1 },
        raw: true,
        // limit:3
      });
      console.log('re', result);
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
   * 类型菜单列表
   * @param ctx
   */
  public async getProductByTypeId(ctx: IContext): Promise<object> {
    const { typeId: type_id, start, pageSize } = ctx.request.query;
    let offset = (start - 1) * pageSize;
    offset = offset < 0 ? 0 : offset;
    const rawparams = {
      type_id,
      offset,
      limit: pageSize,
    };
    console.log(rawparams);
    try {
      let result = await sequelize.models.ProductModel.findAll({
        where: { type_id },
        offset,
        limit: Number(pageSize),
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

  // tools

  private async getMovieListByTypeId(type_id: number): Promise<object> {
    try {
      let result = await this.getProductList({ type_id });

      if (result) {
        return result;
      }
      return null;
    } catch (error) {}
  }

  private async getProductList({
    type_id = 1,
    limit = 18,
    offset = 0,
  }): Promise<object> {
    try {
      let result = await sequelize.models.ProductModel.findAll({
        where: {
          type_id,
        },
        // limit,
        // offset,
        raw: true,
        nest: true,
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
}
