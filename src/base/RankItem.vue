<template>
  <div class="item">
    <a :href="'https://www.bilibili.com/video/av'+ item.aid +'/'" target="_blank">
      <img :src="solveImgUrl(item.pic)" width="160" height="100">
      <div class="title-small"><div class="text">{{item.title}}</div></div>
      <div class="mask">
        <div class="title">
          {{item.title}}
        </div>
        <div class="detail">
          <div class="author">up主：{{item.author}}</div>
          <div class="play">播放：{{item.play}}</div>
        </div>
        <div class="looklater"></div>
      </div>
    </a>
  </div>
</template>

<script>
  import {solveImgUrl} from '@/common/js/utils'

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
      solveImgUrl
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";

  div.item {
    width: 160px;
    height: 100px;
    position: relative;
    border-radius: 5px;
    a {
      border-radius: 5px;
      font-size: 0;
      display: block;
      img {
        border-radius: 5px;
      }
      div.title-small {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 12px;
        height: 30px;
        color: #ffffff;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.2) 35%, rgba(0, 0, 0, 0.6) 65%, rgba(0, 0, 0, 0.9));
        border-radius: 5px;
        div.text {
          padding-left: 5px;
          border-radius: 5px;
          padding-top: 5px;
          display: block;
          line-height: 25px;
          width: 90%;
          white-space: nowrap;
          overflow: hidden;
          box-shadow: none;
        }
      }
      div.mask {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 5px;
        visibility: hidden;
        opacity: 0;
        transition: opacity .4s;
        div.title {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          color: #ffffff;
          line-height: 18px;
          font-size: 12px;
          padding: 5px;
          box-sizing: border-box;
        }
        div.detail {
          position: absolute;
          bottom: 0;
          left: 0;
          line-height: 18px;
          font-size: 12px;
          box-sizing: border-box;
          color: $fontDark;
          padding-left: 5px;
          padding-bottom: 5px;
        }
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
      &:hover{
        div.text {
          visibility: hidden;
        }
        div.mask {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }

</style>
