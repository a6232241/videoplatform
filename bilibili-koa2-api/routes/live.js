const router = require('koa-router')()
const request = require('request-promise')
const {live} = require('../url')

router.get('/live', async (ctx, next) => {
  let res = await request(live)
  let result = res.slice(1, -2)
  ctx.body = result
})

module.exports = router
