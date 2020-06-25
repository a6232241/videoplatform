const router = require('koa-router')()
const request = require('request-promise')
const {menuData} = require('../url')

router.get('/menuData', async (ctx, next) => {
  let res = await request(menuData)
  ctx.body = res
})

module.exports = router
