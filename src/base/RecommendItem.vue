<template>
  <div class="recommendItem" v-if="item">
    <a :href="'https://www.bilibili.com/video/av'+ item.aid +'/'" target="_blank">
      <img v-lazy="solveImgUrl(item.pic)" width="160" height="100">
      <div class="userInfo">
        <div class="avatar" v-lazy:background-image="solveImgUrl(item.last_recommend[0].face)">
        </div>
        <div class="detail">
          <div>{{item.author}}</div>
          <div>推荐</div>
        </div>
      </div>
      <div class="mask">
        <div class="looklater"></div>
      </div>
      <div class="title">{{item.title}}</div>
    </a>
  </div>
</template>

<script>
  import {sec2Time, solveImgUrl} from '@/common/js/utils'
  export default {
    name: '',
    props: {
      item: {
        type: Object,
        default: null
      }
    },
    data () {
      return {
      }
    },
    methods: {
      sec2Time,
      solveImgUrl
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";

  div.recommendItem {
    width: 160px;
    height: 148px;
    position: relative;
    border-radius: 5px;
    a {
      border-radius: 5px;
      font-size: 0;
      display: block;
      img {
        border-radius: 5px;
      }
      div.userInfo {
        position: absolute;
        bottom: 12px;
        left: 5px;
        div.avatar {
          height: 45px;
          width: 45px;
          border-radius: 50%;
          border:2px solid #ffffff;
          background-position:center;
          background-size: 100% 100%;
        }
        div.detail {
          box-sizing: border-box;
          padding: 0 3px;
          position: relative;
          left: 45px;
          top:-15px;
          width: 110px;
          font-size: 12px;
          display: flex;
          justify-content: space-between;
          color: #000;
          div:nth-child(1) {
            width: 60px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          div:nth-child(2) {
            color: $fontDark;
          }
        }
      }
      div.mask {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 48px;
        background-color: rgba(0, 0, 0, 0);
        border-radius: 5px;
        opacity: 0;
        transition: all 0.4s;
        div.looklater {
          width: 22px;
          height: 22px;
          position: absolute;
          right: 6px;
          bottom: 4px;
          cursor: pointer;
          background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/watchlater-1.png);
          &:hover:after {
            display: block;
          }
          &:after {
            content: '稍后再看';
            background-color: black;
            font-size: 12px;
            color: #ffffff;
            padding: 3px 5px;
            position: absolute;
            left: -75%;
            top: -27px;
            display: none;
            border-radius: 5px;
            width: 50px;
          }
        }
      }
      div.title {
        transition: all 0.4s;
        padding-top: 25px;
        font-size: 12px;
        line-height: 20px;
        overflow: hidden;
        height: 40px;
      }
      &:hover{
        div.text {
          visibility: hidden;
        }
        div.title{
          color: $hoverBlue;
        }
        div.mask {
          opacity: 1;
          div.detail {
            opacity: 1;
          }
        }
      }
    }
  }

</style>
