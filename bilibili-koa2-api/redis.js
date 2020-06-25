const redis = require('redis')
const client = redis.createClient()
const bluebird = require('bluebird')

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

client.on('ready', function () {
  console.log('redis ready')
})

client.on('error', function (err) {
  console.log('Error' + err)
})

module.exports = {
  set: function (key, value) {
    client.set(key, value, redis.print)
    client.expire(key, 259200)
  },
  client: client
};
