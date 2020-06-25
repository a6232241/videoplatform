<template>
  <div class="baseItem" v-if="item">
    <a :href="'https://www.bilibili.com/video/av'+ item.aid +'/'" target="_blank"
       @mouseover="getDanmu" @mouseleave="danmuStop">
      <img v-lazy="solveImgUrl(item.pic)" width="160" height="100">
      <div class="mask" @mousemove="getPreView">
        <div class="preview" v-if="preViewData" :style="{backgroundPosition:pos[1]+'px '+pos[0]+'px'}"
             v-lazy:background-image="solvePreImgUrl(preViewData.image[0])"></div>
        <div class="processBarWrap">
          <div class="processBar" :style="{width: barPercent*0.9*100 + '%'}"></div>
        </div>
        <p class="danmu" v-for="(item, index) in danmu" :key="index"
           :style="{top: ((index%2 * 18)+10) + 'px'}" :class="{danmuStop: index <= danmuIndex}">{{item}}</p>
        <div class="detail">
          <div class="play">{{sec2Time(item.duration)}}</div>
        </div>
        <div class="looklater"></div>
      </div>
      <div class="title">{{item.title}}
        <div class="detail">
          <span class="view"><span class="icon"></span> {{num2Wan(item.stat.view)}}</span>
          <span class="danmaku"><span class="icon"></span> {{num2Wan(item.stat.danmaku)}}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  import {sec2Time, solveImgUrl, num2Wan, throttle, solvePreImgUrl} from '@/common/js/utils'
  import api from '@/common/js/api'

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
        danmu: [],
        danmuIndex: -1,
        timer: null,
        preViewData: null,
        barPercent: 0
      }
    },
    computed: {
      pos () {
        if (!this.preViewData) {
          return 0
        }
        let index = this.preViewData.index.length * this.barPercent | 0
        let res = [((index / 10) | 0) * 90 * -1, index % 10 * 160 * -1]
        console.log(`位置第${((index / 10) | 0)}行，第${index % 10}个`)
        return res
      }
    },
    methods: {
      async getPreView (e) {
        this.barPercent = (e.clientX - e.currentTarget.getBoundingClientRect().left) / 160
        console.log('百分比', this.barPercent)
        if (!this.preViewData) {
          this.preViewData = await api.getPreView(this.item.aid)
          console.log('视频预览数据', this.preViewData)
        }
      },
      getDanmu: throttle(async function () {
        if (this.danmu.length === 0) {
          this.danmu = await api.getComment(this.item.aid)
          console.log('弹幕数据', this.danmu)
        }
        if (this.timer) return
        this.timer = setInterval(() => {
          this.danmuIndex += 1
          if (this.danmuIndex > this.danmu.length - 1) {
            this.danmuIndex = -1
            clearInterval(this.timer)
          }
        }, 2000)
      }, 300),
      danmuStop () {
        if (this.timer) {
          clearInterval(this.timer)
          this.timer = null
          console.log('清除定时器', this.timer)
        }
      },
      sec2Time,
      solveImgUrl,
      num2Wan,
      solvePreImgUrl
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";
  .danmuStop {
    left: -100%!important;
    transition: all 6s;
  }
  div.baseItem {
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
        overflow: hidden;
        div.preview {
          position: absolute;
          left: 0;
          top: 10px;
          width: 100%;
          height: 90px;
          background-color: white;
          background-size: 1600px;
        }
        div.processBarWrap {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 10px;
          background-color: black;
          div.processBar {
            position: absolute;
            left: 5%;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 2px;
            border-radius: 1px;
            background-color: #cfcfcf;
          }
        }
        p {
          position: absolute;
          left: 100%;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 12px;
          color: white;
          transition-timing-function: linear;
        }
        div.detail {
          position: absolute;
          bottom: 0;
          left: 0;
          line-height: 18px;
          font-size: 12px;
          box-sizing: border-box;
          color: white;
          padding-left: 8px;
          padding-bottom: 2px;
          opacity: 0;
          transition: all 0.4s;
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
          span.view {
            color: $fontDark;
            display: inline-block;
            width: 85px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            vertical-align: top;
            span {
              background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png);
              background-position: -282px -90px;
            }
          }
          span.danmaku {
            color: $fontDark;
            display: inline-block;
            vertical-align: top;
            span {
              background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png);
              background-position: -282px -218px;
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
