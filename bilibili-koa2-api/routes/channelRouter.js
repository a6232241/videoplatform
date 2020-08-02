const router = require("koa-router")()
const { transloadit } = require("../transloaditConfig")
const multer = require("@koa/multer")
const storage = multer.diskStorage({
  // destination: "public/uploads/" + new Date().getFullYear() + (new Date().getMonth() + 1) + new Date().getDate(),
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

const template = {
  "steps": {
    ":original": {
      "robot": "/upload/handle"
    },
    "webm_encoded": {
      "use": ":original",
      "robot": "/video/encode",
      "result": true,
      "ffmpeg_stack": "v3.3.3",
      "preset": "webm"
    },
    "exported": {
      "use": [
        "webm_encoded",
        ":original"
      ],
      "robot": "/s3/store",
      "credentials": "YOUR_AWS_CREDENTIALS"
    }
  }
}
const templateStr = JSON.stringify(template)

router.post("/uploadVideo", upload.array('videos', 5), async (ctx) => {
  let res = {
    videos: ctx.request.files,
    username: ctx.request.body.username
  }
  console.log(res)

  const params = {
    name: res.username,
    template: templateStr
  }
  const options = {
    waitForCompletion: true,
    params : {
      template_id: params.name,
    },
  }
  // 創建template
  await transloadit.createTemplate(params)
  // 新增檔案
  for(let i = 0; i < res.videos.length; i++) {
    let video = res.videos[i]
    await transloadit.addFile(video.filename, video.destination)
  }
  // 創建assembly
  await transloadit.createAssembly(options, doneCb, progressCb)
  ctx.body = `上傳成功`
})

router.get("/removeVideo", async (ctx) => {
  const params = {
    name: 'test',
    template: templateStr
  }
  const options = {
    waitForCompletion: true,
    params : {
      template_id: params.name,
    },
  }
  // 創建template
  await transloadit.createTemplate(params)
  // 新增檔案
  // for(let i = 0; i < res.videos.length; i++) {
  //   let video = res.videos[i]
  let dir = 'C:\\Users\\寬程\\AppData\\Local\\Temp'
  await transloadit.addFile('ImageSlider - Google Chrome 2020-02-08 22-12-01.mp4', './public/video/')
  // }
  // 創建assembly
  await transloadit.createAssembly(options, (err, result) => {
    if (err) {
      throw err
    }
  })
  ctx.body = `上傳成功`
})

module.exports = router
