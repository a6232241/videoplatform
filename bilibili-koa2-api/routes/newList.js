const router = require('koa-router')()
const request = require('request-promise')
const {newList} = require('../url')

router.get('/newList', async (ctx, next) => {
  let res = await request(newList + ctx.query.content)
  ctx.body = res
})

module.exports = router
