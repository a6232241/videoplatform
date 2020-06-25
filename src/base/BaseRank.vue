<template>
  <div class="baseRank">
    <div class="header">
      <span class="title">排行</span>
      <ul>
        <li @mouseover="change({type: 0})" :class="{active: index === 0}">全部</li>
        <li @mouseover="change({type: 1})" :class="{active: index === 1}">原创</li>
      </ul>
      <div class="switch">
        <div>{{switchArr[switchIndex]}} <span class="downIcon"></span></div>
        <div class="optional" @click="change({time: switchIndex === 1 ? 0 : 1})">{{switchArr[switchIndex === 1 ? 0 : 1]}}</div>
      </div>
    </div>

    <div class="wrap">
      <div class="wrapAll" :style="{left: (-100*index)+'%'}">
        <div class="rank">
          <div class="rankItem" v-for="(item, index) in rankData" :key="index" @mouseover="showDetail($event, item)" @mouseleave="itemLeave">
            <div class="rankIndex" :class="{rankTop: index+1 < 4 }">{{index + 1}}</div>
            <a :href="'https://www.bilibili.com/video/av'+ item.aid +'/'" :title="item.title" target="_blank">
              <div class="imgWrap" v-if="index === 0">
                <img v-lazy="solveImgUrl(item.pic)" width="80" height="50">
                <div class="looklater"></div>
              </div>
              <div class="detail">
                <div :class="{lineOne: index !== 0}">{{item.title}}</div>
                <div class="pts" v-if="index === 0">综合评分：{{num2Wan(item.pts)}}</div>
              </div>
            </a>
          </div>
        </div>

        <div class="rank">
          <div class="rankItem" v-for="(item, index) in rankData" :key="index" @mouseover="showDetail($event, item)" @mouseleave="itemLeave">
            <div class="rankIndex" :class="{rankTop: index+1 < 4 }">{{index + 1}}</div>
            <a :href="'https://www.bilibili.com/video/av'+ item.aid +'/'" :title="item.title" target="_blank">
              <div class="imgWrap" v-if="index === 0">
                <img v-lazy="solveImgUrl(item.pic)" width="80" height="50">
                <div class="looklater"></div>
              </div>
              <div class="detail">
                <div :class="{lineOne: index !== 0}">{{item.title}}</div>
                <div class="pts" v-if="index === 0">综合评分：{{num2Wan(item.pts)}}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <button>查看更多 ></button>
    </div>
  </div>
</template>

<script>
  import {solveImgUrl, num2Wan} from '@/common/js/utils'
  export default {
    props: {
      rankData: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data () {
      return {
        index: 0,
        switchArr: ['三日', '一周'],
        switchIndex: 0
      }
    },
    methods: {
      getPosition (dom) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        let x = dom.getBoundingClientRect().x
        let y = scrollTop + dom.getBoundingClientRect().y
        return {x: x, y: y}
      },
      itemLeave () {
        this.$emit('itemLeave')
      },
      showDetail (e, item) {
        let posObj = this.getPosition(e.currentTarget)
        this.$emit('itemHover', {data: item, position: posObj})
      },
      change (data) {
        this.index = data.type === undefined ? this.index : data.type
        this.switchIndex = data.time === undefined ? this.switchIndex : data.time
        let obj = {
          type: this.index === 0 ? 'all' : 'origin',
          time: this.switchIndex === 0 ? 3 : 7
        }
        this.$emit('change', obj)
      },
      solveImgUrl,
      num2Wan
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";
  .lineOne {
    height: 18px!important;
  }
  .rankTop {
    background-color: $BpinkText!important;
  }
  .imgActive {
    background-color: $Bpink!important;
    width: 30px!important;
  }
  .active {
    color: $hoverBlue;
    border-bottom: 1px solid $hoverBlue!important;
    &:after {
      transition: all 0.2s;
      opacity: 1;
      content: ' ';
      width: 0;
      height: 0;
      position: absolute;
      left: 50%;
      bottom: 0;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-bottom: 3px solid $hoverBlue;
      transform: translateX(-50%);
    }
  }
  div.baseRank {
    div.header {
      padding-bottom: 20px;
      span.title {
        vertical-align: top;
        font-size: 18px;
        padding-right: 15px;
      }
      ul {
        display: inline-block;
        li {
          position: relative;
          float: left;
          font-size: 12px;
          margin-right: 20px;
          cursor: pointer;
          padding-bottom: 4px;
          transition: all 0.2s;
          border-bottom: 1px solid transparent;
        }
        &:after {
          content: ' ';
          width: 0;
          height: 0;
          display: block;
          visibility: hidden;
          clear: both;
        }
      }
      div.switch {
        cursor: pointer;
        float: right;
        font-size: 12px;
        border-radius: 5px;
        border:1px solid $fontGrey;
        padding: 4px 7px;
        position: relative;
        span.downIcon {
          display: inline-block;
          width: 12px;
          height: 12px;
          background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png);
          background-position: -475px -152px;
        }
        div.optional {
          display: none;
          position: absolute;
          left: 0;
          width: 38px;
          bottom: -24px;
          font-size: 12px;
          border-radius: 0 0 5px 5px;
          border:1px solid $fontGrey;
          border-top:0;
          padding: 4px 7px;
          &:hover {
            background-color: $hover;
          }
        }
        &:hover {
          div.optional {
            display: block;
          }
        }
      }
    }
    div.wrap {
      width: 100%;
      overflow: hidden;
      &:after {
        content: ',';
        width: 0;
        height: 0;
        display: block;
        clear: both;
        visibility: hidden;
      }
      div.wrapAll {
        width: 200%;
        display: flex;
        position: relative;
        transition: all .3s;

        div.rank {
          width: 50%;
          font-size: 12px;
          div.rankItem {
            padding-bottom: 20px;
            display: flex;
            div.rankIndex {
              width: 18px;
              height: 18px;
              border-radius: 4px;
              background-color: #b8c0cc;
              color: white;
              font-weight: bold;
              line-height: 18px;
              text-align: center;
              flex: none;
            }
            a {
              flex: auto;
              display: flex;
              padding-left: 7px;
              div.imgWrap {
                width: 80px;
                height: 50px;
                padding-right: 4px;
                position: relative;
                img {
                  border-radius: 5px;
                }
                div.looklater {
                  width: 22px;
                  height: 22px;
                  position: absolute;
                  right: 6px;
                  bottom: 4px;
                  cursor: pointer;
                  display: none;
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
              div.detail {
                flex: auto;
                display: flex;
                flex-wrap: wrap;
                align-content: space-between;
                div {
                  display: block;
                  box-sizing: border-box;
                  width: 100%;
                  height: 32px;
                  line-height: 17px;
                  overflow: hidden;
                  text-overflow: clip;
                  &.pts {
                    color: $fontDark;
                    height: 14px;
                  }
                }
              }
              &:hover {
                div.looklater {
                  display: block!important;
                }
                div {
                  color: $hoverBlue;
                }
              }
            }
          }
        }
      }
      button {
        border: 0;
        background: $btnGrey;
        font-size: 12px;
        outline: none;
        border-radius: 5px;
        line-height: 25px;
        cursor: pointer;
        width: 100%;
        &:hover {
          background: $btnHover;
        }
      }
    }
  }
</style>
