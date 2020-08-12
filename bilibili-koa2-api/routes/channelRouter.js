const router = require("koa-router")()
const fs = require("fs")
const multer = require("@koa/multer")
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
    // const filenameArr = file.originalname.split(".")
    cb(null, file.originalname)
  }
})
const fileFilter = (ctx, file, cb) => {
    let mimetype = file.mimetype.split('/')
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
    files: ctx.request.files,
    username: ctx.request.body.username
  }
  console.log(res)
  ctx.body = `上傳成功`
})

router.get("/downloadVideo", async (ctx) => {
  ctx.body = `下載成功`
})

router.get("/removeVideo", async (ctx) => {
  ctx.body = `移除成功`
})

module.exports = router
