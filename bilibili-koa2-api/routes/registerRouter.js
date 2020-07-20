const router = require('koa-router')()
const { query } = require('../dbConfig')

router.post('/signup', async (ctx) => {
  let data = [
    ctx.request.body.username,
    ctx.request.body.pwd,
    ctx.request.body.mobilePhone
  ]
  let sql = 'INSERT INTO users(name,password, mobilephone) VALUE(?, ?, ?)'
  query(sql, [...data])
  ctx.body = `註冊成功`
})

module.exports = router