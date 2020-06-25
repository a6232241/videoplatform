const router = require('koa-router')()
const request = require('request-promise')
const {AllData} = require('../url')

router.get('/allData', async (ctx, next) => {
  let res = await request(AllData)
  ctx.body = res
})

module.exports = router
