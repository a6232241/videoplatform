const mysql = require('mysql')
const conn = mysql.createConnection({
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'ba9fdb4b4697cf',
  password: 'fad49888',
  database: 'heroku_ee4ebc07ea97c63',
  multipleStatements: true
})

let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    // pool.getConnection((err, conn) => {
    //   if (err) {
    //     reject(err)
    //   } else {
        // 執行 sql 腳本對資料庫進行讀寫
    conn.query(sql, values, (err, rows) => {
      if (err) {
        reject(err)
      } else {
        resolve(rows)
      }
      // conn.release()  // 結束會話
    })
    //   }
    // })
  })
}

module.exports = { query }