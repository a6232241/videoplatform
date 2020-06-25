import {url} from '@/common/js/url'
import axios from 'axios'

export default {
  async getBanner () {
    let {data: {data: res}} = await axios.get(url.banner)
    console.log('轮播图数据', res)
    return res
  },
  async getPromote () {
    let {data: res} = await axios.get(url.promote)
    console.log('推广数据', res)
    return res
  },
  async getPromoteAd () {
    let {data: {data: [res]}} = await axios.get(url.promoteAd)
    console.log('推广广告数据', res)
    return res
  },
  async getRecommend () {
    let {data: {list: res}} = await axios.get(url.recommend)
    console.log('底部推荐数据', res)
    return res.slice(0, 5)
  },
  async getLive () {
    let {data: {data: res}} = await axios.get(url.live)
    console.log('直播数据', res)
    return res
  },
  async getAllData () {
    let {data: {data: res}} = await axios.get(url.allData)
    console.log('各分区数据', res)
    return res
  },
  getZoneRank (zoneOrigin) {
    let promiseArr = []
    let tmpObj = {}
    for (let i = 0; i < zoneOrigin.length; i++) {
      promiseArr.push(axios.get(url.zoneRank + '&type=all&content=' + zoneOrigin[i] + '&duration=3'))
    }
    Promise.all(promiseArr).then(res => {
      res.forEach((item, index) => {
        let {data: {data: res}} = item
        res = res.slice(0, 7)
        tmpObj[zoneOrigin[index]] = res
      })
    })
    console.log('各分区排行数据', tmpObj)
    return tmpObj
  },
  async getNewList (data) {
    let {data: {data: {archives: res}}} = await axios.get(url.newList + data.zoneType)
    return res.slice(0, 10)
  },
  async getWeekRank (data) {
    let {data: {data: res}} = await axios.get(`${url.zoneRank}&type=${data.type}&content=${data.zoneType}&duration=${data.time}`)
    return res.slice(0, 7)
  },
  async getRankDay () {
    let {data: {data: res}} = await axios.get(url.rankDay)
    return res
  },
  async getRankThree () {
    let {data: {data: res}} = await axios.get(url.rankThree)
    return res
  },
  async getRankWeek () {
    let {data: {data: res}} = await axios.get(url.rankWeek)
    return res
  },
  async getMenuData () {
    let {data: {data: {region_count: res}}} = await axios.get(url.menuData)
    console.log('菜单数据', res)
    return res
  },
  async getDefaultWord () {
    let {data: res} = await axios.get(url.defaultWord)
    return res[0]
  },
  async getHeaderData () {
    let {data: {data: [res]}} = await axios.get(url.header)
    return res
  },
  async getComment (aid) {
    let {data: res} = await axios.get(url.comment + '?aid=' + aid)
    return res
  },
  async getPreView (aid) {
    let {data: {data: res}} = await axios.get(url.getPreView + '?aid=' + aid)
    return res
  }
}
