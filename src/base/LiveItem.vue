<template>
  <div class="liveItem" v-if="item">
    <a :href="item.link" target="_blank">
      <img :src="solveImgUrl(item.pic)" width="160" height="100">
      <div class="mask">
        <div class="detail">
          <div class="avatar">
            <img :src="solveImgUrl(item.face)" width="48" height="48">
          </div>
          <div class="status">
            <span class="dot"></span>
            <span>Live</span>
          </div>
        </div>
      </div>
      <div class="type">{{item.areaName}}</div>
      <div class="title">{{item.title}}
        <div class="detail">
          <span class="uname"><span class="icon"></span> {{item.uname}}</span>
          <span class="online"><span class="icon"></span> {{item.online}}</span>
        </div>
      </div>
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

  div.liveItem {
    width: 160px;
    height: 148px;
    position: relative;
    border-radius: 5px;
    padding-bottom: 20px;
    a {
      border-radius: 5px;
      font-size: 0;
      display: block;
      img {
        border-radius: 5px;
      }
      div.mask {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 68px;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        opacity: 0;
        transition: all 0.4s;
        div.detail {
          div.avatar {
            height: 48px;
            width: 48px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-125%, -50%);
            img {
              border-radius: 50%;
            }
          }
          div.status {
            height: 20px;
            border-radius: 20px;
            background-color: #00a1d6;
            color: #ffffff;
            font-size: 12px;
            line-height: 20px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(0, -50%);
            padding-right: 7px;
            span {
              display: inline-block;
              vertical-align: top;
            }
            span.dot {
              margin: 7px;
              display: inline-block;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background-color: #ffffff;
            }
          }
        }
      }
      div.type {
        position: absolute;
        right: 0;
        bottom: 68px;
        font-size: 12px;
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 5px 0 5px 0;
        padding: 2px 4px;
        opacity: 1;
      }
      div.title {
        transition: all 0.4s;
        padding-top: 10px;
        font-size: 12px;
        line-height: 20px;
        overflow: hidden;
        height: 40px;
        position: relative;
        div.detail {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 12px;
          background-color: #ffffff;
          overflow: hidden;
          transition: all .3s;
          span.icon {
            height: 12px;
            width: 12px;
            display: inline-block;
            vertical-align: middle;
            position: relative;
            top:-1px;
          }
          span.uname {
            color: $fontDark;
            display: inline-block;
            width: 85px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            vertical-align: top;
            span {
              background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png);
              background-position: -282px -154px;
            }
          }
          span.online {
            color: $fontDark;
            display: inline-block;
            vertical-align: top;
            span {
              background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/live-eye.png);
              background-position: 0 0;
            }
          }
        }
      }
      &:hover{
        div.text {
          visibility: hidden;
        }
        div.title{
          color: $hoverBlue;
          div.detail {
            bottom: -20px;
          }
        }
        div.type {
          opacity: 0;
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
