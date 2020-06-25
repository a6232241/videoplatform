const router = require('koa-router')()
const request = require('request-promise')
const {imageUrl} = require('../url')

router.get('/header', async (ctx, next) => {
  let json = await request(imageUrl.header)
  ctx.body = json
})

module.exports = router
