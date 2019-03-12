const COS = require('cos-nodejs-sdk-v5');

module.exports = (argv, opt, callback) => {
  const cos = new COS({
    SecretId: argv.SecretId,
    SecretKey: argv.SecretKey
  })

  cos.sliceUploadFile({
    Bucket: argv.Bucket,
    Region: argv.Region,
    ...opt
  }, (err, data) => {
    callback && callback(data)
  })
}
