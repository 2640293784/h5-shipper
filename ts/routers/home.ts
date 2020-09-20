const router = require('koa-router')()
const { query } = require('../database')
router.get('/carouser',async(ctx:any)=>{
  try {
    const res= await query('carouser',{});
    const { results } = res
    if(results){
      const dataresults:any[]= results.map((item:any) =>{
        item.src = `http://192.168.1.100:3000/${item.src}`
        return item;
      })
      ctx.body = {
        message:'成功',
        data:dataresults,
        status:200
      }
    }
  } finally{}
})
export default router