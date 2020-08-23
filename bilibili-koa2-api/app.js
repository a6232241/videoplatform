const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const session = require('koa-session');

app.keys = ['secret']; // 這行是要生成 cookie 時使用的，也就是下方其中一個選項 signed 所需要
const sessionConfig = {
  key: 'koa:sess', /** cookie 金鑰 (string) (預設: koa:sess) */
  /** (number || 'session') maxAge 是以毫秒為單位(1000 = 1 秒) (預設: 1 天) */
  /** 'session' 的相關設置將會影響到關閉瀏覽器清除 cookie or session */
  /** 注意: session cookie 若被竊取, 將會導致永不過期的問題 */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) 自動提交 header 資訊 (預設: true) */
  overwrite: true, /** (boolean) 可覆蓋若不覆蓋 (看不懂意思) (預設: true) */ 
  httpOnly: true, /** (boolean) 是否開啟 httpOnly，也就是要不要給 JavaScript 讀取  (預設: true) */
  signed: true, /** (boolean) 是否附上簽名 (看不懂意思) (預設: true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (看不懂意思) (預設: is false) */
  renew: true, /** (boolean) 是否 session 即將到期時自動更新，也就是瀏覽器重新整理後會自動給予新的 session (建議給 true) (預設: is false)*/
};

app.use(session(sessionConfig, app));

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

const registerRouter = require('./routes/registerRouter')
const channelRouter = require('./routes/channelRouter')

// error handler
onerror(app)

app.use(cors({
  origin: (ctx) => {
    if(ctx.url === '/') {
      return "*"
    }
    return 'http://localhost:8080'
  }, // 允许这个域名的 跨域请求
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
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

app.use(registerRouter.routes(), registerRouter.allowedMethods())
app.use(channelRouter.routes(), channelRouter.allowedMethods())

module.exports = app
