const router = require('koa-router')()
const { query } = require('../dbConfig')

// 解析 multipart/form-data
const multer = require('@koa/multer')()

router.post('/signup', multer.array(), async (ctx) => {
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

router.post('/login', multer.array(), async (ctx) => {
  let data = [
    ctx.request.body.username,
    ctx.request.body.pwd,
  ]

  let sql = 'SELECT id, MD5(UNIX_TIMESTAMP() + id + RAND(UNIX_TIMESTAMP())) guid FROM users WHERE name = ? AND password = ?'
  let result = await query(sql, [...data])
  if(result[0] === undefined) {
    ctx.body = `帳號錯誤，請重新輸入帳號或密碼`
  } else {
    // 去掉 RowDataPacket (以form為例)
    result = JSON.parse(JSON.stringify(result))
    let resultData = [
      result[0].guid,
      result[0].id
    ]
    sql = 'UPDATE users SET guid = ? WHERE id = ?';
    query(sql, [...resultData])
    ctx.body = `登錄成功`
  }
})

module.exports = router
