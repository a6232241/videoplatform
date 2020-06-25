const router = require('koa-router')()
const request = require('request-promise')
const {imageUrl} = require('../url')
/* const redis = require('../redis') */

//  router.prefix('/image')

//  处理传来图片
//  redis缓存处理
/* router.get(/^\/image\/dynamic(?:\/|$)/, async (ctx, next) => {
  let url = ctx.url.split('/').slice(3).join('/')
  let cache = await redis.client.getAsync(url)
  if (!cache) {
    let image = await request({url: imageUrl.imgPrefix + ctx.url.split('/').slice(3).join('/'), encoding: null})
    redis.set(url, image.toString('base64'))
    ctx.type = 'image/png'
    ctx.body = image
  } else {
    console.log('读取redis图片缓存')
    ctx.type = 'image/png'
    ctx.body = new Buffer(cache, 'base64')
  }
})
 */
router.get(/^\/image\/dynamic(?:\/|$)/, async (ctx, next) => {
  let image = await request({url: imageUrl.imgPrefix + ctx.url.split('/').slice(3).join('/'), encoding: null})
  ctx.type = 'image/png'
  ctx.body = image
})

router.get(/^\/image\/preView(?:\/|$)/, async (ctx, next) => {
  let image = await request({url: imageUrl.imgPrefixPre + ctx.url.split('/').slice(3).join('/'), encoding: null})
  ctx.type = 'image/png'
  ctx.body = image
})

module.exports = router
