<template>
  <div id="bilibili" ref="bilibili">
    <div class="bannerRank">
      <bilibili-banner :dataArr="banner" :delay="4000" class="banner"></bilibili-banner>
      <bilibili-rank></bilibili-rank>
    </div>
    <div class="main_body" v-if="allData && zoneRank">

      <bilibili-wrap :posX="-141" :posY="-75" title="推广" :promoteData="promoteData" :promoteAd="promoteAd"></bilibili-wrap>

      <bilibili-wrap :posX="-141" :posY="-652" title="正在直播" :liveData="liveData"></bilibili-wrap>

<!--
      <bilibili-wrap :posX="-141" :posY="-908" :zoneType="1" title="动画" :zoneData="allData[1]" :rankData="zoneRank[1]"></bilibili-wrap>
-->
      <bilibili-wrap v-for="(item, index) in zoneOrigin" :posX="-141" :posY="zoneIcon[item]"
                     :title="zoneMap[item]" :zoneData="allData[item]"
                     :rankData="zoneRank[item]" :zoneType="item" :key="index"
                     @change="showChange" :ref="'wrap'+item"
                     @itemHover="showItemHover" @itemLeave="showItemLeave"
                     @titleChange="titleChange">

      </bilibili-wrap>

      <bilibili-wrap :posX="-141" :posY="-780" title="特别推荐" :recommendData="recommendData"></bilibili-wrap>
    </div>
    <!--视频详细信息弹窗-->
    <transition name="fade">
      <video-detail v-if="itemHoverData" :itemHoverData="itemHoverData"></video-detail>
    </transition>
    <bilibili-elevator :zoneOrigin="zoneOrigin" :zoneMap="zoneMap"
                       :elevatorLeft="elevatorLeft" :elevatorActive="elevatorActive"
                       @elevatorClick="elevatorClick"></bilibili-elevator>
  </div>
</template>

<script>
  import api from '@/common/js/api'
  import BilibiliBanner from '@/base/BilibiliBanner'
  import BilibiliRank from '@/components/BilibiliRank'
  import BilibiliWrap from '@/components/BilibiliWrap'
  import BilibiliElevator from '@/components/BilibiliElevator'
  import VideoDetail from '@/base/VideoDetail'

  export default {
    name: '',
    data () {
      return {
        banner: [],
        promoteData: [],
        promoteAd: null,
        recommendData: [],
        liveData: null,
        allData: null,
        zoneRank: null,
        zoneOrigin: [1, 3, 4, 5, 11, 13, 23, 36, 119, 129, 155, 160, 165, 168],
        itemHoverData: null,
        zoneIcon: {
          1: -908, 3: -266, 4: -203, 5: -1032, 11: -845, 13: -140, 23: -396, 36: -525, 119: -332, 129: -461, 155: -718, 160: -970, 165: -1228, 168: -140
        },
        zoneMap: {
          1: '动画',
          3: '音乐',
          4: '游戏',
          5: '娱乐',
          11: '电视剧',
          13: '番剧动态',
          23: '电影',
          36: '科技',
          119: '鬼畜',
          129: '舞蹈',
          155: '时尚',
          160: '生活',
          165: '广告',
          168: '国创相关'
        },
        elevatorLeft: 0,
        elevatorActive: 0,
        newDynamicTemp: {}
      }
    },
    mounted () {
      this.elevatorLeft = this.$refs.bilibili.getBoundingClientRect().right
      this.getBanner()
      this.getAllData()
      this.getZoneRank()
      this.getPromote()
      this.getPromoteAd()
      this.getRecommend()
      this.getLive()
      //  监听调整窗口时的电梯位置
      window.addEventListener('resize', () => {
        this.elevatorLeft = this.$refs.bilibili.getBoundingClientRect().right
      })
      //  滚动监听
      document.addEventListener('scroll', () => {
        this.zoneOrigin.forEach((item) => {
          let top = this.$refs['wrap' + item][0].$el.getBoundingClientRect().top
          if (top < 300 && top > -10) {
            this.elevatorActive = item
          }
        })
        if (document.documentElement.scrollTop < 840) {
          this.elevatorActive = 0
        }
      })
    },
    methods: {
      async getBanner () {
        this.banner = await api.getBanner()
      },
      async getAllData () {
        this.allData = await api.getAllData()
      },
      getZoneRank () {
        this.zoneRank = api.getZoneRank(this.zoneOrigin)
      },
      async getPromote () {
        this.promoteData = await api.getPromote()
      },
      async getPromoteAd () {
        this.promoteAd = await api.getPromoteAd()
      },
      async getRecommend () {
        this.recommendData = await api.getRecommend()
      },
      async getLive () {
        this.liveData = await api.getLive()
      },
      async titleChange (data) {
        console.log('视频类别切换', data.titleChange, '分区类别', this.zoneMap[data.zoneType])
        if (data.titleChange === 1) {
          this.newDynamicTemp[data.zoneType] = this.allData[data.zoneType]
          this.allData[data.zoneType] = await api.getNewList(data)
        } else {
          this.allData[data.zoneType] = this.newDynamicTemp[data.zoneType]
        }
      },
      elevatorClick (item) {
        console.log('当前点击', this.zoneMap[item])
        this.$refs['wrap' + item][0].$el.scrollIntoView({block: 'start', behavior: 'smooth'})
      },
      getBilibiliPosition () {
        return this.$refs.bilibili.getBoundingClientRect()
      },
      showItemLeave () {
        this.itemHoverData = null
        console.log('离开元素')
      },
      showItemHover (obj) {
        console.log('hover元素', obj)
        obj.position.x -= this.getBilibiliPosition().left
        obj.position.y = obj.position.y - 420
        this.itemHoverData = obj
      },
      async showChange (data) {
        console.log('时间切换', data.time, '类别', data.type, '分区类别', this.zoneMap[data.zoneType])
        this.zoneRank[data.zoneType] = await api.getWeekRank(data)
        this.$forceUpdate()
      }
    },
    components: {
      BilibiliBanner,
      BilibiliRank,
      BilibiliWrap,
      VideoDetail,
      BilibiliElevator
    }
  }
</script>

<style  lang="scss" scoped>
  @import "../common/style/variable";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  #bilibili {
    max-width: $max-width;
    min-width: $min-width;
    position: relative;
    div.bannerRank {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-bottom: 40px;
      div.banner{

      }
      &:after {
        content: ',';
        display: block;
        visibility: hidden;
        height: 0;
        width: 0;
        clear: both;
      }
    }
  }
</style>
