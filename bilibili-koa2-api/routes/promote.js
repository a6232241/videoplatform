const router = require('koa-router')()
const request = require('request-promise')
const {promote} = require('../url')

router.prefix('/promote')

router.get('/', async (ctx, next) => {
  let {data: {34: res}} = JSON.parse(await request(promote.default))
  ctx.body = JSON.stringify(res)
})

router.get('/hot', async (ctx, next) => {
  let res = await request(promote.hot)
  ctx.body = res
})

router.get('/ad', async (ctx, next) => {
  let res = await request(promote.ad)
  ctx.body = res
})

module.exports = router
