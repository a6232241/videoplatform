const router = require('koa-router')()
const request = require('request-promise')
const {topRank} = require('../url')

router.get('/topRank', async (ctx, next) => {
  let res = await request(topRank[ctx.query.time])
  ctx.body = res
})

module.exports = router
