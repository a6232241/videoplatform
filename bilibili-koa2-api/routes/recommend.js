const router = require('koa-router')()
const request = require('request-promise')
const {recommend} = require('../url')

router.get('/recommend', async (ctx, next) => {
  let res = await request(recommend)
  ctx.body = res
})

module.exports = router
