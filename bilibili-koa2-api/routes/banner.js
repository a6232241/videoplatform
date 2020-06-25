const router = require('koa-router')()
const request = require('request-promise')
const {banner} = require('../url')

router.get('/banner', async (ctx, next) => {
  let res = await request(banner)
  ctx.body = res
})

module.exports = router
