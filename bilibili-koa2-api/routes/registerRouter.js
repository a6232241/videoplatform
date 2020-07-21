const router = require('koa-router')()
const { query } = require('../dbConfig')

router.post('/signup', async (ctx) => {
  let data = [
    ctx.request.body.username,
    ctx.request.body.pwd,
    ctx.request.body.mobilePhone
  ]
  let sql = 'SELECT name FROM users WHERE name = ?'
  let result = await query(sql, [data[0]])
  if(result[0] !== undefined) {
    ctx.body = `帳號重複，請重新設定新的帳號`
  } else {
    sql = 'INSERT INTO users(name,password, mobilephone) VALUE(?, ?, ?)'
    query(sql, [...data])
    ctx.body = `註冊成功`
  }
})

module.exports = router
