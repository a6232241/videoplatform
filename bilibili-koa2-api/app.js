const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')

const index = require('./routes/index')
const users = require('./routes/users')
const images = require('./routes/images')
const banner = require('./routes/banner')
const header = require('./routes/header')
const defaultWord = require('./routes/defaultWord')
const promote = require('./routes/promote')
const menuData = require('./routes/menuData')
const recommend = require('./routes/recommend')
const allData = require('./routes/allData')
const live = require('./routes/live')
const timeLine = require('./routes/timeLine')
const baseRank = require('./routes/baseRank')
const topRank = require('./routes/topRank')
const newList = require('./routes/newList')
const comment = require('./routes/comment')
const getPreView = require('./routes/getPreView')

// error handler
onerror(app)

app.use(cors())

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(images.routes(), images.allowedMethods())
app.use(banner.routes(), banner.allowedMethods())
app.use(header.routes(), header.allowedMethods())
app.use(defaultWord.routes(), defaultWord.allowedMethods())
app.use(promote.routes(), promote.allowedMethods())
app.use(menuData.routes(), menuData.allowedMethods())
app.use(recommend.routes(), recommend.allowedMethods())
app.use(allData.routes(), allData.allowedMethods())
app.use(live.routes(), live.allowedMethods())
app.use(timeLine.routes(), timeLine.allowedMethods())
app.use(baseRank.routes(), baseRank.allowedMethods())
app.use(topRank.routes(), topRank.allowedMethods())
app.use(newList.routes(), newList.allowedMethods())
app.use(comment.routes(), comment.allowedMethods())
app.use(getPreView.routes(), getPreView.allowedMethods())

module.exports = app
