const mysql = require('mysql');
interface sqlObj {
  sql:string;
  params?:string[]
}
interface fieldsInt{
  [key:string]:any
}
var connection = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  port : 3306,//端口号
  password:'123456',
  database:"nodemysql",
  dateStrings:true
})
const operation = (sql:sqlObj['sql'],params:sqlObj['params'])=>{
  return new Promise((resolve,reject)=>{
    connection.query(sql,params,(err:any,results:any,fields:any)=>{
      if(err) {
        console.log('*****database operation failed*****');
        reject(new Error(err))
        return;
      };
      console.log('*****database operation success*****');
      //将查询出来的数据返回给回调函数
      resolve({results, fields});
    })
  })
}

//数据库链接
exports.connect =()=>{
  return new Promise((resolve,reject)=>{
    connection.connect((err:any)=>{
      if(err) {
        console.log('*****database connection failed*****');
        reject(new Error(err))
      };
      console.log('*****database connection success*****');
      resolve()
    })
  })
}

//向表中新增数据
exports.add=(table:string,fields:object)=>{
  return new Promise((resolve,reject)=>{
    let keys:any[] = Object.keys(fields)
    let values:any[] = Object.values(fields)
    const addSql = `INSERT INTO ${table}(${keys.toString()}) VALUES(${values.toString()})`
    connection.query(addSql,(err:any,results:any,fields:any)=>{
      if(err) {
        console.log(`*****Failed to add data to table ${table}*****`);
        reject(new Error(err))
        return;
      };
      console.log(`*****success to add data to table ${table}*****`);
      //将查询出来的数据返回给回调函数
      resolve({results, fields});
    })
  })
}

//删除表中数据
exports.remove=(table:string,fields:string,value:[]|string|number)=>{
  return new Promise((resolve,reject)=>{
    const isArr:boolean = value instanceof Array
    const newVal = isArr? value.toString():value
    const removeSql:string = `DELETE FROM ${table} where ${fields} ${isArr?'in':'='} ${newVal}`;
    connection.query(removeSql,(err:any,results:any,fields:any)=>{
      if(err) {
        console.log(err);
        console.log(`*****Failed to add data to table ${table}*****`);
        reject(new Error(err))
        return;
      };
      console.log(`*****success to add data to table ${table}*****`);
      //将查询出来的数据返回给回调函数
      resolve({results, fields});
    })
  })
}

//更新表中数据
exports.update=(table:string,fields:object,updateFields:object)=>{
  return new Promise((resolve,reject)=>{
    let keys:any[] = Object.keys(fields)
    let values:any[] = Object.values(fields)
    const updateSql:string = `UPDATE ${table}(${keys.toString()}) VALUES(${values.toString()})`
    connection.query(updateSql,(err:any,results:any,fields:any)=>{
      if(err) {
        console.log(err);
        console.log(`*****Failed to add data to table ${table}*****`);
        reject(new Error(err))
        return;
      };
      console.log(`*****success to add data to table ${table}*****`);
      //将查询出来的数据返回给回调函数
      resolve({results, fields});
    })
  })
}

//查询数据
exports.query=(table:string,fields:fieldsInt)=>{
  return new Promise((resolve,reject)=>{
    const fieldsLen = Object.keys(fields).length
    let querySql:string = ''
    const fieldsArr:string[] = []
    for (const key in fields) {
      fieldsArr.push(`${key}=${fields[key]}`); 
    }
    if(fieldsLen===0){
      querySql = `SELECT * FROM ${table}`
    }else{
      querySql = `SELECT * FROM ${table} where ${fieldsArr.join(' and ')}`
    }    
    connection.query(querySql,(err:any,results:any,fields:any)=>{
      if(err) {
        console.log(err);
        console.log(`*****Failed to add data to table ${table}*****`);
        reject(new Error(err))
        return;
      };
      console.log(`*****success to add data to table ${table}*****`);
      //将查询出来的数据返回给回调函数
      resolve({results, fields});
    })
  })
}