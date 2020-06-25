<template>
  <div class="elevatorWrap">
    <transition name="fade">
      <div class="mask" v-if="showMask">
      </div>
    </transition>
    <div class="elevator" :style="{left: elevatorLeft + 10 + 'px', top: top+'px'}">
      <transition name="rightToLeft">
        <div class="elevatorMask" v-if="showMask">
          <div class="tips-img"></div>
        </div>
      </transition>
      <div class="list" :class="{active: elevatorActive === item && !showMask,moveItem: showMask}"
           v-for="(item, index) in zoneSort" :style="{order: index}"
           :key="index" @click="itemClick(item)" @mousedown="itemMouseDown($event, index)">
        {{zoneMap[item]|smaller}}
      </div>
      <div class="sort list"  @click="showMask = !showMask">
        <span class="icon"></span>排序
      </div>
      <div class="link"></div>
      <div class="toTop" @click="scrollTop"></div>
      <a href="https://app.bilibili.com/?channel=home_recommend" target="_blank">
        <div class="downLoad"></div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      zoneMap: {
        type: Object,
        default: null
      },
      zoneOrigin: {
        type: Array,
        default: function () {
          return []
        }
      },
      elevatorLeft: {
        type: Number,
        default: 0
      },
      elevatorActive: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        top: 236,
        showMask: false
      }
    },
    computed: {
      zoneSort () {
        return this.zoneOrigin
      }
    },
    filters: {
      smaller (str) {
        return str.length > 3 ? str.slice(0, 2) : str
      }
    },
    mounted () {
      document.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 299) {
          this.top = 140
        } else {
          this.top = 236
        }
      })
    },
    methods: {
      itemMouseDown (e, index) {
        let bol = true
        let that = this
        if (bol) return
        console.log(e.currentTarget)
        let item = e.currentTarget
        let disY = e.clientY
        console.log(disY, '鼠标位置', e.clientY)
        document.onmousemove = function (e) {
          console.log('move', 'index', index)
          item.style.top = (e.clientY - disY) + 'px'
          if ((e.clientY - disY) > 32) {
            let temp = that.zoneSort[index]
            that.zoneSort.splice(index, 1)
            that.zoneSort.splice(index + 1, 0, temp)
            console.log(that.zoneSort)
          }
        }
        document.onmouseup = function () {
          document.onmousedown = null
          document.onmousemove = null
        }
      },
      scrollTop () {
        document.body.scrollIntoView({block: 'start', behavior: 'smooth'})
      },
      itemClick (item) {
        if (this.showMask) return
        this.$emit('elevatorClick', item)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  .rightToLeft-enter-active, .rightToLeft-leave-active {
    transform: scale(1, 1);
    transition: transform .2s
  }
  .rightToLeft-enter, .rightToLeft-leave-to {
    transform: scale(0, 1)
  }
  .moveItem {
    cursor: ns-resize!important;
    user-select: none!important;
    transition: all 0s!important;
  }
  .active {
    background-color: #00a1d6!important;
    color: #fff!important;
  }
  div.elevatorWrap {
    position: relative;
    div.mask {
      z-index: 900;
      position: fixed;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
    div.elevator {
      z-index: 999;
      position: fixed;
      background-color: #f6f9fa;
      border: 1px solid #e5e9ef;
      right: 20px;
      display: flex;
      flex-direction: column;
      border-radius: 4px;
      transition: top .5s;
      width: 50px;
      div.elevatorMask {
        transform-origin: 100% 50%;
        z-index: 10;
        left: -130px;
        top:-15px;
        position: absolute;
        width: 200px;
        height: 686px;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 5px;
        div.tips-img {
          position: absolute;
          width: 117px;
          height: 333px;
          background: url(//s1.hdslb.com/bfs/static/webssr/home/images/tab2233.png);
          left: 12px;
          top: 14px;
        }
      }
      div.list {
        position: relative;
        z-index: 999;
        width: 50px;
        line-height: 32px;
        font-size: 12px;
        color: black;
        text-align: center;
        cursor: pointer;
        background-color: transparent;
        transition: all .3s;
        &:hover {
          background-color: #00a1d6;
          color: #fff;
        }
      }
      div.sort {
        height: 50px;
        border-radius: 0 0 4px 4px;
        order:999;
        span.icon {
          display: block;
          margin: 5px auto 0;
          background: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png);
          background-position: -663px -151px;
          width: 18px;
          height: 18px;
        }
      }
      div.link {
        height: 14px;
        width: 30px;
        margin: 0 9px;
        border-left: 1px solid #e5e9ef;
        border-right: 1px solid #e5e9ef;
        position: absolute;
        bottom: -14px;
      }
      div.toTop {
        z-index: 999;
        height: 50px;
        width: 50px;
        border: 1px solid #e5e9ef;
        border-radius: 4px;
        position: absolute;
        bottom: -64px;
        cursor: pointer;
        background: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png);
        background-position: -648px -72px;
        background-color: #f6f9fa;
        &:hover {
          background-position: -714px -72px;
          border-color: #00a1d6;
          background-color: #00a1d6;
        }
      }
      div.downLoad {
        z-index: 999;
        position: absolute;
        bottom: -140px;
        left: -10px;
        width: 80px;
        height: 80px;
        background: url(//s1.hdslb.com/bfs/static/webssr/home/images/app-download.png);
      }
    }
  }

</style>
