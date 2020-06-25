<template>
  <div class="liveRank">
    <div class="header">
      <ul>
        <li @click="index = 0" :class="{active: index === 0}">直播排行</li>
        <li @click="index = 1" :class="{active: index === 1}">关注的主播</li>
        <li @click="index = 2" :class="{active: index === 2}">为你推荐</li>
      </ul>
    </div>
    <div class="wrap">
      <div class="wrapAll" :style="{left: (-100*index)+'%'}">
        <div class="rank">
          <div class="rankItem" v-for="(item, index) in dataArr" :key="index">
            <div class="rankIndex" :class="{rankTop: index+1 < 4 }">{{index + 1}}</div>
            <a :href="item.link" target="_blank">
              <div class="avatar" :style="{backgroundImage: 'url(' +solveImgUrl(item.face)+ ')'}"></div>
              <div class="detail">
                <div class="status">
                  <div class="uname">{{item.uname}}</div>
                  <div class="online"><span class="watchIcon"></span>{{num2Wan(item.online)}}</div>
                </div>
                <div class="title">{{item.title}}</div>
              </div>
            </a>
          </div>
        </div>
        <div class="fav">暂无数据</div>
        <div class="recommend">
          <div class="wrap">
            <div class="wrapAll" :style="{left: imgIndex * -260 + 'px'}">
              <a v-for="(item, index) in preview" :key="index" :href="item.url" target="_blank">
                <img :src="solveImgUrl(item.pic)">
                <div class="mask">
                  <p>{{item.title}}</p>
                </div>
              </a>
            </div>
            <div class="slide">
              <ul>
                <li @mouseover="imgIndex = 0" :class="{imgActive: imgIndex === 0}"></li>
                <li @mouseover="imgIndex = 1" :class="{imgActive: imgIndex === 1}"></li>
                <li @mouseover="imgIndex = 2" :class="{imgActive: imgIndex === 2}"></li>
              </ul>
            </div>
          </div>
          <div class="link">
            <a target="_blank" href="//www.bilibili.com/p/" class="pic fl">
              <img src="//s1.hdslb.com/bfs/static/webssr/home/images/wh.png" alt="有文画">
            </a>
            <a target="_blank" href="//vc.bilibili.com" class="pic fr">
              <img src="//s1.hdslb.com/bfs/static/webssr/home/images/sp.png" alt="小视频">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {solveImgUrl, num2Wan} from '@/common/js/utils'
  export default {
    props: {
      liveRankData: {
        type: Array,
        default: function () {
          return []
        }
      },
      preview: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data () {
      return {
        index: 2,
        imgIndex: 0,
        timer: null
      }
    },
    mounted () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setInterval(() => {
        this.imgIndex ++
        if (this.imgIndex === 3) {
          this.imgIndex = 0
        }
      }, 2500)
    },
    computed: {
      dataArr () {
        return this.liveRankData.splice(0, 6)
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
  div.liveRank {
    div.header {
      padding-bottom: 20px;
      ul {
        li {
          position: relative;
          float: left;
          font-size: 12px;
          margin-right: 20px;
          cursor: pointer;
          padding-bottom: 5px;
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
        width: 300%;
        display: flex;
        position: relative;
        transition: all .3s;

        div.rank {
          width: 100%;
          font-size: 12px;
          div.rankItem {
            height: 40px;
            padding-bottom: 14px;
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
            }
            a {
              flex: auto;
              display: flex;
              div.avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-size: 100% 100%;
                background-position: center;
                margin-left: 10px;
              }
              div.detail {
                padding-left: 12px;
                display: flex;
                flex-direction: column;
                align-content: space-between;
                flex: auto;
                div.status {
                  line-height: 20px;
                  flex: auto;
                  display: flex;
                  justify-content: space-between;
                  div.online {
                    color: $fontDark;
                    span.watchIcon {
                      height: 12px;
                      width: 12px;
                      display: inline-block;
                      vertical-align: middle;
                      position: relative;
                      top: -2px;
                      background: url(//s1.hdslb.com/bfs/static/webssr/home/images/live-eye.png) no-repeat
                    }
                  }
                }
                div.title {
                  line-height: 20px;
                  height: 20px;
                  flex: auto;
                  color: $fontDark;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
              &:hover {
                div.status div.uname {
                  color: $hoverBlue;
                }
              }
            }
          }
        }
        div.fav {
          width: 100%;
          color: $fontDark;
          text-align: center;
          font-size: 12px;
          padding-top: 20px;
        }
        div.recommend {
          width: 100%;
          div.wrap {
            width: 260px;
            height: 248px;
            position: relative;
            border-radius: 5px;
            div.wrapAll {
              width: 300%;
              height: 100%;
              overflow: hidden;
              position: relative;
              a {
                position: relative;
                div.mask {
                  height: 50px;
                  width: 100%;
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  background-color: rgba(0, 0, 0, 0.55);
                  color: #ffffff;
                  font-size: 12px;
                  p {
                    padding: 7px;
                  }
                }
              }
            }
            div.slide {
              position: absolute;
              bottom: 10px;
              left: 50%;
              transform: translateX(-50%);
              ul{
                &:after {
                  content: ' ';
                  width: 0;
                  height: 0;
                  clear: both;
                  display: block;
                  visibility: hidden;
                }
                li {
                  display: block;
                  float: left;
                  width: 12px;
                  height: 6px;
                  background-color: #ffffff;
                  border-radius: 3px;
                  margin: 0 5px;
                  transition: all .3s;
                  cursor: pointer;
                }
              }
            }

          }
          div.link {
            padding-top:20px;
          }
        }
      }
    }
  }
</style>
