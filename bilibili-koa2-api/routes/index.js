const router = require('koa-router')()
const { query } = require('../dbConfig')
// 解析 multipart/form-data
const multer = require('@koa/multer')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/videoList', async (ctx, next) => {
  let sql = 'SELECT aid, title, author, preview, DATE_FORMAT(createtime, \"%Y-%m-%d %r\") AS createtime FROM videos WHERE authority = "public"'
  let resSql = await query(sql)
  let replyDataList = {}
  if (resSql[0] === undefined) {
    replyDataList = {
      message: `目前沒有新增影片`,
      data: undefined
    }
  } else {
    // 去掉 RowDataPacket (以form為例)，轉為 JSON
    resSql = JSON.parse(JSON.stringify(resSql))
    replyDataList = {
      message: 'ok',
      data: resSql
    }
  }
  ctx.body = replyDataList
})

router.post('/video', multer.array(), async (ctx, next) => {
  let res = {
    videoAid: ctx.request.body.videoAid
  }
  let sql = 'SELECT title, author, path, DATE_FORMAT(createtime, \"%Y-%m-%d %r\") AS createtime FROM videos WHERE aid = ?'
  let resSql = await query(sql, Object.values(res))
  let replyDataList = {}
  if (resSql[0] === undefined) {
    replyDataList = {
      message: `發生錯誤，找不到該影片`,
      data: undefined
    }
  } else {
    // 去掉 RowDataPacket (以form為例)，轉為 JSON
    resSql = JSON.parse(JSON.stringify(resSql))
    replyDataList = {
      message: 'ok',
      data: resSql
    }
  }
  ctx.body = replyDataList
})

module.exports = router
