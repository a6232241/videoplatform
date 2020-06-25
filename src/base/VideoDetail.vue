<template>
  <div class="videoDetail" :style="{top:itemHoverData.position.y+'px', left:itemHoverData.position.x + 'px'}">
    <div class="title">{{itemHoverData.data.title}}</div>
    <div class="author">{{itemHoverData.data.author}} | {{itemHoverData.data.create}}</div>
    <div class="desc">
      <img v-lazy="solveImgUrl(itemHoverData.data.pic)" width="100" height="62.5">
      <div class="description">{{itemHoverData.data.description}}</div>
    </div>
    <div class="info">
      <div><span class="play"></span> {{num2Wan(itemHoverData.data.play)}}</div>
      <div><span class="danmu"></span> {{num2Wan(itemHoverData.data.video_review)}}</div>
      <div><span class="fav"></span> {{num2Wan(itemHoverData.data.favorites)}}</div>
      <div><span class="cions"></span> {{num2Wan(itemHoverData.data.coins)}}</div>
    </div>
  </div>
</template>

<script>
  import {solveImgUrl, num2Wan} from '@/common/js/utils'

  export default {
    name: '',
    props: {
      itemHoverData: {
        type: Object,
        default: null
      }
    },
    methods: {
      solveImgUrl,
      num2Wan
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";

  div.videoDetail {
    position: absolute;
    z-index: 1000;
    width: 320px;
    height: 152px;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    font-size: 12px;
    padding: 10px 12px;
    border-radius: 5px;
    div.title {
      line-height: 16px;
      height: 16px;
      width: 100%;
      overflow: hidden;
    }
    div.author {
      color: $fontDark;
      border-bottom: 1px solid $fontGrey;
      padding: 7px 0;
    }
    div.desc {
      padding: 8px 0;
      border-bottom: 1px solid $fontGrey;
      display: flex;
      img {
        border-radius: 5px;
        flex: none;
      }
      div.description {
        color: $fontDark;
        padding-left: 10px;
        height: 62px;
        overflow: hidden;
      }
    }
    div.info {
      display: flex;
      line-height: 16px;
      justify-content: space-between;
      padding-top: 8px;
      width: 80%;
      div {
        color: $fontDark;
        span {
          padding-bottom: 3px;
          vertical-align: bottom;
          height: 12px;
          width: 12px;
          display: inline-block;
          background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png);
          &.play {
            background-position: -282px -90px;
          }
          &.danmu {
            background-position: -282px -218px;
          }
          &.fav {
            background-position: -282px -345px;
          }
          &.cions {
            background-position: -282px -410px;
          }
        }
      }
    }
  }
</style>
