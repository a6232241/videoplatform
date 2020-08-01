const router = require("koa-router")()
const multer = require("@koa/multer")
const storage = multer.diskStorage({
  destination: "public/uploads/" + new Date().getFullYear() + (new Date().getMonth() + 1) + new Date().getDate(),
  filename: (ctx, file, cb) => {
    // const filenameArr = file.originalname.split(".")
    cb(null, file.originalname)
  }
})
const fileFilter = (ctx, file, cb) => {
    let mimetype = file.mimetype.split('/')
    if (mimetype[0] === 'video') {
        cb(null, true)
    } else {
        cb(new Error('請上傳影音檔'))
    }
}
const upload = multer({
    storage: storage,
    fileFilter
})

router.post("/uploadVideo", upload.single('videos'), async (ctx) => {
  //   let res = {
  //     video: ctx.request.body.video,
  //   }
  console.log(ctx.request.file)
  ctx.body = `上傳成功`
});

module.exports = router
