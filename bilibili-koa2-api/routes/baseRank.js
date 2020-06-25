const router = require('koa-router')()
const request = require('request-promise')
const {baseRank} = require('../url')

router.get('/baseRank', async (ctx, next) => {
  let res = await request(`${baseRank}?rid=${ctx.query.content}&day=${ctx.query.duration}&original=${ctx.query.type === 'all' ? 0 : 1}&jsonp=jsonp&_=1507396155271`)
  ctx.body = res
})

module.exports = router
