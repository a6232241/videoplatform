const router = require('koa-router')()
const { query } = require('../dbConfig')

// 解析 multipart/form-data
const multer = require('@koa/multer')()

router.post('/signup', multer.array(), async (ctx) => {
  let res = {
    username: ctx.request.body.username,
    pwd: ctx.request.body.pwd,
    mobilePhone: ctx.request.body.mobilePhone
  }
  let sql = 'SELECT name FROM users WHERE name = ?'
  let resSql = await query(sql, [res.username])
  if (resSql[0] !== undefined) {
    ctx.body = `帳號重複，請重新設定新的帳號`
  } else {
    sql = 'INSERT INTO users(name,password, mobilephone) VALUE(?, ?, ?)'
    query(sql, Object.values(res))
    ctx.body = `註冊成功`
  }
})

router.post('/login', multer.array(), async (ctx) => {
  let loginData = {}
  let res = {
    username: ctx.request.body.username,
    pwd: ctx.request.body.pwd,
  }

  let sql = 'SELECT id, MD5(UNIX_TIMESTAMP() + id + RAND(UNIX_TIMESTAMP())) guid FROM users WHERE name = ? AND password = ?'
  let resSql = await query(sql, Object.values(res))
  if (resSql[0] === undefined) {
    loginData = {
      status: false,
      message: `帳號錯誤，請重新輸入帳號或密碼`,
    }
  } else {
    // 去掉 RowDataPacket (以form為例)，轉為 JSON
    resSql = JSON.parse(JSON.stringify(resSql))
    let resSqlData = {
      guid: resSql[0].guid,
      id: resSql[0].id
    }
    sql = 'UPDATE users SET guid = ? WHERE id = ?'
    await query(sql, Object.values(resSqlData))
    // if(ctx.request.body.contract === 'true') {
    // ctx.session.guid = resSqlData.guid
    // }
    loginData = {
      status: true,
      message: `登入成功`,
      guid: resSqlData.guid
    }
  }
  ctx.body = loginData
})

router.get('/logout', async (ctx) => {
  // ctx.session.guid = null
  ctx.body = `登出成功`
})

router.post('/incsession', multer.array(), async (ctx) => {
  let res = {
    guid: ctx.request.body.guid
  }
  let sql = 'SELECT * FROM users WHERE guid=?'
  let resSql = await query(sql, Object.values(res))
  resSql = JSON.parse(JSON.stringify(resSql))
  if (resSql[0] === undefined) {
    ctx.body = false
  } else {
    let resSqlData = {
      username: resSql[0].name
    }
    ctx.body = resSqlData
  }
})

module.exports = router
