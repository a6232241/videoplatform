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
  let data = {
    username: ctx.request.body.username,
    pwd: ctx.request.body.pwd,
  }
  let sql = 'SELECT id, MD5(UNIX_TIMESTAMP() + id + RAND(UNIX_TIMESTAMP())) guid FROM users WHERE name = ? AND password = ?'
  let result = await query(sql, Object.values(data))
  if(result[0] === undefined) {
    ctx.body = `帳號錯誤，請重新輸入帳號或密碼`
  } else {
    // 去掉 RowDataPacket (以form為例)
    result = JSON.parse(JSON.stringify(result))
    let resultData = {
      guid: result[0].guid,
      id: result[0].id
    }
    // if(ctx.request.body.contract === 'true') {
      ctx.session.guid = resultData.guid
    // }
    sql = 'UPDATE users SET guid = ? WHERE id = ?';
    await query(sql, Object.values(resultData))
    ctx.body = `登錄成功`
  }
})

router.get('/logout', async (ctx) => {
  ctx.session.guid = null
  ctx.body = `登出成功`
})

router.get('/incsession', async (ctx) => {
  let sql = 'SELECT guid FROM users'
  let result = await query(sql)
  result = JSON.parse(JSON.stringify(result))
  let cookieGuid = ctx.session.guid
  if(cookieGuid !== null && cookieGuid === result[0].guid) {
    ctx.body = cookieGuid
  } else {
    ctx.body = false
  }
})

module.exports = router
