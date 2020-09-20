import { Sequelize } from 'sequelize-typescript';
import { MYSQL_CONF } from './db';

const sequelize = new Sequelize(
  MYSQL_CONF.database,
  MYSQL_CONF.user,
  MYSQL_CONF.password,
  {
    //   database: MYSQL_CONF.database,
    //   username: MYSQL_CONF.user,
    //   password: MYSQL_CONF.password,
    host: MYSQL_CONF.host,
    dialect: 'mysql',
    storage: ':memory:',
    define: {
      createdAt: false,
      updatedAt: false,
      deletedAt: false,
    },
    models: [__dirname + '/../models/*.model.*s'],
  }
);

// sequelize.addModels([__dirname + '/../model/*.model.*s']);

sequelize
  .authenticate()
  .then(() => {
    console.log('mysql数据库链接成功');
    // sequelize.addModels([UserTable]);
    setImmediate(() => {
      // let u = new UserTable();
      // u.$get('uname').then((res) => {
      //   console.log(res);
      // });
      // const person = new UserTable({ uname: 'bob', upass: '99',rule:1 });
      //   person.save();

      // UserTable.findOne().then((user) => {
      //   // user.upass = '123456';
      //   console.log(user);
      //   return user.save();
      // });

      console.log('sequelize.models list:', sequelize.models);
      {
        // let title='title11',group_id=1,created_id=1;
        // let newArt = sequelize.models.Arts.create(
        //   {
        //     title,
        //     group_id,
        //     created_id,
        //     content:'',
        //   },
        // ).then(res =>{
        //   console.log('art创建成功:',res)
        // })
        // sequelize.query(`
        //   insert into arts values (null,'title2','c2',1);
        //   insert into group_arts values (null,1,last_insert_id());
        // `).then(r=>{
        //   console.log(r)
        // })
        // sequelize.models.GroupArts.findAll({
        //   include: [
        //     {
        //       model: sequelize.models.Groups,
        //       attributes: ['name'],
        //     },
        //     {
        //       model: sequelize.models.Arts,
        //       attributes: ['id', 'title', 'created_id'],
        //       // on:{
        //       //   'created_id':1
        //       // },
        //       // include:[
        //       //   {
        //       //     model:sequelize.models.UsersModel,
        //       //     attributes:['name']
        //       //   }
        //       // ],
        //     },
        //     // {
        //     //   model:sequelize.models.Users,
        //     //   attributes:['name']
        //     // }
        //   ],
        //   // attributes: {
        //   //   // exclude:['a'],
        //   //   // include: ['id', 'group_id'],
        //   // },
        //   raw: true,
        //   nest: true,
        // }).then((res) => {
        //   console.log(res);
        // });
        // sequelize.models.Arts.create(
        //   {
        //     title: 'seq_title',
        //     content: '',
        //     created_id: '1',
        //   },
        //   {
        //     raw: true,
        //   }
        // ).then((art) => {
        //   console.log(sequelize);
        // });
        // sequelize.transaction().then((t) => {
        //   return sequelize.models.Arts.create(
        //     { title: 'seq_title4', content: '', created_id: '1' },
        //     { transaction: t, raw: true }
        //   )
        //     .then((art) => {
        //       // return sequelize.models.Arts.create({}, { transaction: t });
        //       return art;
        //     })
        //     .then((af) => {
        //       let art_id = af.get('id');
        //       let group_id = 2;
        //       return sequelize.models.GroupArts.create(
        //         {
        //           art_id,
        //           group_id,
        //         },
        //         {
        //           raw: true,
        //           transaction: t,
        //         }
        //       );
        //       // console.log('保存后的值',af);
        //       // console.log('保存后的值.setDatavalue',af.get('id'));
        //     })
        //     .then((ga) => {
        //       console.log(ga);
        //       return ga;
        //     })
        //     .then(t.commit.bind(t))
        //     .catch(t.rollback.bind(t));
        // });
        // sequelize.models.Groups.findAll({
        //   include: [sequelize.models.GroupArts],
        //   raw:true,
        //   nest:true,
        // }).then((r) => console.log(r));
        // let users = sequelize.models.UsersModel.findOne({
        //   where: {
        //     name: 'admin',
        //     id: '1',
        //   },
        //   // raw: true,
        // }).then(function(user){
        //   console.log('user查询结构', user.get('name'));
        // });
      }
      // sequelize.models.Arts.findAll().then((rows) => {
      //   console.log('art的数据', rows);
      // });
    }, 1000);
  })
  .catch((err: Error) => {
    console.error('链接数据库失败', err);
  });

export { sequelize };
