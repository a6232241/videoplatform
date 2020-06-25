const router = require('koa-router')()
const request = require('request-promise')
const {timeLine} = require('../url')

router.prefix('/timeLine')

router.get('/', async (ctx, next) => {
  let res = await request(timeLine.jp)
  ctx.body = res.slice(9, -2)
})

router.get('/zh', async (ctx, next) => {
  let res = await request(timeLine.zh)
  ctx.body = res.slice(12, -2)
})

module.exports = router
