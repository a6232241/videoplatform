const router = require('koa-router')()
const request = require('request-promise')
const {defaultWord} = require('../url')

router.get('/defaultWord', async (ctx, next) => {
  let res = await request(defaultWord)
  ctx.body = res
})

module.exports = router
