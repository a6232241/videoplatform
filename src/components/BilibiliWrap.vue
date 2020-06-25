<template>
  <div class="bilibiliWrap">
    <!--左侧-->
    <div class="wrapLeft">
      <bilibili-title :posX="posX" :posY="posY" :title="title"
                      :showSwitch="!!zoneData.length" @change="titleChange"></bilibili-title>
      <!--推广-->
      <div class="videoWarp" v-if="promoteData.length">
        <promote-item v-for="(item, index) in promoteData" :key="index" :item="item"></promote-item>
      </div>
      <!--底部推荐-->
      <div class="videoWarp" v-if="recommendData.length">
        <recommend-item v-for="(item, index) in recommendData" :key="index" :item="item"></recommend-item>
      </div>
      <!--直播-->
      <div class="videoWarp" v-if="liveData">
        <live-item v-for="(item, index) in liveData.recommend" :key="index" :item="item"></live-item>
      </div>
      <!--各大分区-->
      <div class="videoWarp" v-if="zoneData">
        <base-item v-for="(item, index) in zoneData" :key="index" :item="item"></base-item>
      </div>

    </div>

    <!--右侧-->
    <div class="wrapRight">
      <!--直播排行榜-->
      <live-rank v-if="liveData" :liveRankData="liveData.ranking" :preview="liveData.preview"></live-rank>
      <!--底部推荐右侧广告-->
      <recommend-ad v-if="recommendData.length"></recommend-ad>
      <!--推广右侧广告-->
      <promote-ad v-if="promoteAd" :promoteAd="promoteAd"></promote-ad>
      <!--各分区右侧排行数据-->
      <base-rank :rankData="rankData" v-if="rankData.length"
                 @change="change"
                 @itemHover="itemHover" @itemLeave="itemLeave"></base-rank>

    </div>

  </div>
</template>

<script>
  import BilibiliTitle from '@/base/BilibiliTitle'
  import PromoteItem from '@/base/PromoteItem'
  import PromoteAd from '@/base/PromoteAd'
  import RecommendItem from '@/base/RecommendItem'
  import RecommendAd from '@/base/RecommendAd'
  import LiveItem from '@/base/LiveItem'
  import LiveRank from '@/base/LiveRank'
  import BaseItem from '@/base/BaseItem'
  import BaseRank from '@/base/BaseRank'

  export default {
    props: {
      title: {
        type: String,
        default: 'Title'
      },
      zoneType: {
        type: Number,
        default: 0
      },
      promoteData: {
        type: Array,
        default: function () {
          return []
        }
      },
      promoteAd: {
        type: Object,
        default: function () {
          return null
        }
      },
      recommendData: {
        type: Array,
        default: function () {
          return []
        }
      },
      liveData: {
        type: Object,
        default: null
      },
      zoneData: {
        type: Array,
        default: function () {
          return []
        }
      },
      rankData: {
        type: Array,
        default: function () {
          return []
        }
      },
      posX: {
        type: Number,
        default: 0
      },
      posY: {
        type: Number,
        default: 0
      }
    },
    name: '',
    components: {
      BilibiliTitle,
      PromoteItem,
      PromoteAd,
      RecommendItem,
      RecommendAd,
      LiveItem,
      LiveRank,
      BaseItem,
      BaseRank
    },
    methods: {
      titleChange (index) {
        this.$emit('titleChange', {titleChange: index, zoneType: this.zoneType})
      },
      itemLeave () {
        this.$emit('itemLeave')
      },
      itemHover (obj) {
        this.$emit('itemHover', obj)
      },
      change (obj) {
        this.$emit('change', Object.assign(obj, {zoneType: this.zoneType}))
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";
  div.bilibiliWrap {
    width: 100%;
    display: flex;
    padding-bottom: 30px;
    div.wrapLeft {
      width: 900px;
      padding-right: 20px;
      box-sizing: border-box;
      div.videoWarp {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
    div.wrapRight {
      width: 260px;
      padding-top: 10px;
      img {
        border-radius: 5px;
      }
    }
  }
</style>
