const router = require("koa-router")()
const fs = require("fs")
const { query } = require('../dbConfig')
const multer = require("@koa/multer")
const createVideoCode = () => {
  let code = Math.random().toString(10).substring(2)
  let newCode = ''
  for (let i = 0; i < code.length; i += 2) {
    let dec = parseInt(code.substr(i, 2), 10)
    if (!(dec === 33 || (dec > 35 && dec < 39) || (dec > 47 && dec < 58) || (dec > 64 && dec < 91) || (dec > 96 && dec < 100))) {
      dec = Math.floor(100 + Math.random() * (122 - 100 + 1))
    }
    newCode += String.fromCharCode(dec)
  }
  return newCode
}
const videoCode = createVideoCode()
const storage = multer.diskStorage({
  destination: (ctx, file, cb) => {
    const res = {
      username: ctx.body.username,
      authority: ctx.body.authority
    }
    const date = new Date()
    const dir = `./public/uploads/${res.authority}/${res.username}/${date.getFullYear()}${date.getMonth()}${date.getDate()}`
    fs.exists(dir, exist => {
      if (res.username) {
        if (!exist) {
          // recursive 將創建路徑中每個不存在的目錄
          fs.mkdir(dir, {recursive: true}, error => cb(error, dir))
        } else {
          cb(null, dir)
        }
      } else {
        cb(new Error('請登入使用者'))
      }
    })
  },
  filename: (ctx, file, cb) => {
    const filename = videoCode
    const filetype = file.mimetype.split('/')[1]
    cb(null, `${filename}.${filetype}`)
  }
})
const fileFilter = (ctx, file, cb) => {
    const mimetype = file.mimetype.split('/')
    if (mimetype[0] === 'video' || mimetype[0] === 'image') {
        cb(null, true)
    } else {
        cb(new Error(`請上傳影音檔`))
    }
}
const upload = multer({
    storage: storage,
    fileFilter
})

router.post("/uploadVideo", upload.fields([{ name: 'videos', maxCount: 5 }, { name: 'thumbnail', maxCount: 1 }]), async (ctx) => {
  let res = {
    videos: ctx.request.files.videos,
    username: ctx.request.body.username
  }
  for (let i = 0; i < res.videos.length; i++) {    
    let videoData = {
      originalname: res.videos[i].originalname.split('.')[0],
      filename: res.videos[i].filename,
      filepath: res.videos[i].path,
      videocode: res.videos[i].filename.split('.')[0],
      username: res.username
    }
    let sql = 'INSERT INTO videos(originalname, filename, filepath, videocode, username) VALUES(?, ?, ?, ?, ?)'
    query(sql, Object.values(videoData))
  }
  
  ctx.body = `上傳成功`
})

router.get("/downloadVideo", async (ctx) => {
  ctx.body = `下載成功`
})

router.get("/removeVideo", async (ctx) => {
  ctx.body = `移除成功`
})

module.exports = router
