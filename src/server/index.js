const mysql = require('mysql')
const pool = mysql.createPool({
  host: 'us-cdbr-east-02.cleardb.com:3306',
  user: 'ba9fdb4b4697cf',
  password: 'fad49888',
  database: 'heroku_ee4ebc07ea97c63'
})

let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, conn) {
      if (err) {
        reject(err)
      } else {
        // 執行 sql 腳本對資料庫進行讀寫
        conn.query(sql, values, (err, rows) => {

          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          conn.release()  // 結束會話
        })
      }
    })
  })
}

module.exports = { query }