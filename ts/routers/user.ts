const router = require('koa-router')()
const jsonwebtoken = require('jsonwebtoken')
const { add,query } = require('../database')
const { enbcrypt,decrypt } = require('../database/bcrypt')
//注册
router.post('/signUp',async(ctx:any)=>{
  let { username,password } = ctx.request.body
  enbcrypt(password)
  try {
    const registerData = {
      username,
      password:password,
      nick_name:username
    }
    console.log(registerData)
    let res= await add('users',registerData);
    if(res){
      ctx.status=200;
      ctx.response.body = JSON.stringify({
        message:'注册成功',
      })
    }
  } catch{
    ctx.body = {
      message:'注册失败',
      status:500,
      statusText:'注册失败'
    }
  }
})
//登录
router.post('/signOut',async(ctx:any)=>{
  const { body } = ctx.request
  try {
    const res= await query('users',body);
    const { results } = res
    if(results){
      ctx.body = {
        message:'登录成功',
        status:200
      }
    }
  } finally{}
})
export default router