const router = require('koa-router')()
const request = require('request-promise')
const {comment} = require('../url')

router.get('/comment', async (ctx, next) => {
  let aid = ctx.query.aid
  let res = await request(`${comment}?aid=${aid} `)
  ctx.body = res
})

module.exports = router
