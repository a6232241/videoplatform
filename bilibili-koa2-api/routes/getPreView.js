const router = require('koa-router')()
const request = require('request-promise')
const {getPreView} = require('../url')

router.get('/getPreView', async (ctx, next) => {
  console.log(1)
  let res = await request(`${getPreView}&aid=${ctx.query.aid}`)
  ctx.body = res.slice(1, -2)
})

module.exports = router
