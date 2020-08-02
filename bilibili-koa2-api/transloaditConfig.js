const TransloaditClient = require('transloadit')
const transloadit = new TransloaditClient({
  authKey   : 'e423d6ab179b4fa1a03aa5f5bbe4f1a1',
  authSecret: 'f72158aff0577a55d5b6be856108f19856483ddb',
  service: 'https://api2.transloadit.com'
})
 
const doneCb = (err, status) => {
  let assemblyId = ''
 
  if (status) {
    if (status.assembly_id) {
      assemblyId = status.assembly_id
    }
    // Lowlevel errors (e.g. connection errors) are in err, Assembly errors are in status.error.
    // For this example, we don't discriminate and only care about erroring out:
    if (!err && status.error) {
      err = `${status.error}. ${status.message}. `
    }
  }
 
  if (err) {
    console.error({ status })
    throw new Error(`❌ Unable to process Assembly ${assemblyId}. ${err}`)
  }
 
  console.log({ status })
  console.log(`✅ Success`)
}
 
const progressCb = (ret) => {
  let msg = ''
  if (ret.uploadProgress) {
    msg += `♻️ Upload progress polled: ` + ret.uploadProgress.uploadedBytes + ` of ` + ret.uploadProgress.totalBytes + ` bytes uploaded.`
  }
  if (ret.assemblyProgress) {
    msg += `♻️ Assembly progress polled: ${ ret.assemblyProgress.error ? ret.assemblyProgress.error : ret.assemblyProgress.ok } ret.assemblyProgress.assembly_id ... `
  }
 
  console.log(msg)
}

module.exports = { transloadit, doneCb, progressCb }

// // 創建template
// transloadit.createTemplate(templateParams)
// // 新增檔案
// transloadit.addFile('file1', '/PATH/TO/FILE.jpg')
// // 創建assembly
// transloadit.createAssembly(AssemblyOptions, doneCb, progressCb)