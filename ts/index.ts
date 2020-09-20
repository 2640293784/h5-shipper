const Koa = require('koa');
const path = require('path')
const Router = require('koa-router')
const koaStatic = require('koa-static')
const bodyparser = require('koa-bodyparser')
const { connect } = require('./database')
const user = require('./routers/user').default
const home = require('./routers/home').default
const app = new Koa();
const router = new Router()
  app.use(koaStatic(path.join(__dirname,'../public')))
  ; (async () => {
    await connect();
  })()

app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
router.prefix('/api')
router.get('/',async(ctx:any)=>{
  ctx.body = {
    message:'成功',
    data:123456,
    status:200
  }
})
router.use('/user', user.routes())
router.use('/home', home.routes())
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('启动成功')
  console.log('http://localhost:3000');
});