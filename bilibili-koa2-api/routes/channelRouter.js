const router = require("koa-router")()
const fs = require("fs")
const { query } = require('../dbConfig')
const multer = require("@koa/multer")
const storage = multer.diskStorage({
  destination: (ctx, file, cb) => {
    const res = {
      username: ctx.body.username,
      authority: ctx.body.authority
    }
    let dir = ''
    const mimetype = file.mimetype.split('/')
    if (mimetype[0] === 'video') {
      dir = `./public/uploads/${res.authority}/videos`
    } else if ( mimetype[0] === 'image') {
      dir = `./public/uploads/${res.authority}/thumbnails`

    }
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
    const filename = file.originalname.split('.')[0]
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
    thumbnail: ctx.request.files.thumbnail,
    username: ctx.request.body.username,
    authority: ctx.request.body.authority
  }
  for (let i = 0; i < res.videos.length; i++) {    
    let videoData = {
      aid: res.thumbnail[i].filename.split('.')[0],
      title: res.videos[i].filename.split('.')[0],
      author: res.username,
      preview: `http://localhost:3000/uploads/${res.authority}/thumbnails/${res.thumbnail[i].filename}`,
      path: `http://localhost:3000/uploads/${res.authority}/videos/${res.videos[i].filename}`,
      authority: res.authority
    }
    let sql = 'INSERT INTO videos(aid, title, author, preview, path, authority) VALUES(?, ?, ?, ?, ?, ?)'
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
