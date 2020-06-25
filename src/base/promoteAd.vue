<template>
  <div  class="promoteAd">
    <div class="status">
      <span>在线人数：1346260</span>|<span>最新投稿：12215</span>
    </div>
    <div class="ad">
      <a target="_blank" :href="promoteAd.url">
        <img :src="solveImgUrl(promoteAd.pic)" alt="" width="260" height="150" class="pic">
      </a>
    </div>
  </div>
</template>

<script>
  import {sec2Time, solveImgUrl} from '@/common/js/utils'
  export default {
    props: {
      promoteAd: {
        type: Object,
        default: function () {
          return null
        }
      }
    },
    name: '',
    methods: {
      sec2Time,
      solveImgUrl
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";

  div.promoteAd {
    height: 34px;
    width: 100%;

    div.status {
      margin-bottom: 10px;
      height: 34px;
      width: 100%;
      font-size: 12px;
      background-color: #e5e9ef;
      color: $fontDark;
      padding: 9px 5px;
      text-align: center;
      border-radius: 5px;
      display: flex;
      justify-content: space-around;
      box-sizing: border-box;
      span {
        display: block;
      }
    }
    div.ad {
      img {
        border-radius: 5px;
      }
    }
  }
</style>
