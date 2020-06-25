<template>
  <div ref="main_warp" class="main_warp" v-if="dataArr.length">
    <div class="warp" ref="warp" :style="{transition: 'left '+ animateDelay +'ms', left: (-width) * Bindex + 'px'}">
      <div class="item" v-for="item in dataArr">
        <a :href="item.url" target="_blank">
          <img ref="image" width="440" height="220" :src="solveImgUrl(item.pic)">
        </a>
      </div>
    </div>
    <div class="content" ref="content">
      {{dataArr[Bindex].name}}
    </div>
    <div class="pot">
      <ul>
        <li v-for="(item, index) in dataArr"><span class="item" :class="{active: index === Bindex }" @click="changeIndex(index)"></span></li>
      </ul>
    </div>
    <div class="tips">
      <a href="https://www.bilibili.com/blackboard/topic_list.html#/" target="_blank">更多 ></a>
    </div>
  </div>
</template>

<script>
  import {solveImgUrl} from '@/common/js/utils'

  export default {
    name: '',
    props: {
      dataArr: {
        type: Array,
        default: []
      },
      bannerIndex: {
        type: Number,
        default: 0
      },
      animateDelay: {
        type: Number,
        default: 800
      },
      delay: {
        type: Number,
        default: 2500
      }
    },
    data () {
      return {
        width: 0,
        Bindex: this.bannerIndex
      }
    },
    watch: {
      dataArr () {
        if (!this.dataArr.length) return
        this.init()
      }
    },
    methods: {
      solveImgUrl,
      changeIndex (index) {
        this.Bindex = index
        this.init()
      },
      init () {
        this.$nextTick(() => {
          this.width = this.$refs.image[0].width
          this.$refs.warp.style.width = this.$refs.image[0].width * this.dataArr.length + 'px'
          this.$refs.warp.style.height = this.$refs.image[0].height + 'px'
          this.$refs.main_warp.style.width = this.$refs.image[0].width + 'px'
          this.$refs.main_warp.style.height = this.$refs.image[0].height + 'px'
          this.$refs.content.style.width = this.$refs.image[0].width + 'px'
        })
        if (this.timer) {
          clearInterval(this.timer)
        }
        this.timer = setInterval(() => {
          this.Bindex ++
          if (this.Bindex === this.dataArr.length) {
            this.Bindex = 0
          }
          this.$emit('change', this.Bindex)
        }, this.delay)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .active {
    background-position: -855px -727px!important;
  }
  div.main_warp {
    position: relative;
    overflow: hidden;
    display: inline-block;
    border-radius: 6px;

    &:hover div.tips{
      opacity: 1;
    }

    div.warp {
      position: absolute;
      left: 0;
      div.item {
        float: left;
      }
    }
    div.content {
      position: absolute;
      bottom: 0;
      padding-left: 8px;
      padding-bottom: 10px;
      left: 0;
      color: white;
      font-size: 13px;
      box-sizing: border-box;
      box-shadow: inset 0px -12px 20px 1px rgba(0, 0, 0, 0.4);
    }
    div.pot {
      position: absolute;
      right: 17px;
      bottom:6px;
      li {
        float: left;
        padding-right: 8px;
        span.item {
          display: inline-block;
          width: 18px;
          height: 18px;
          background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons.png);
          background-position: -855px -790px;
          &:hover {
            background-position: -919px -790px;
          }
        }
      }
    }
    div.tips {
      position: absolute;
      right: 20px;
      bottom: 32px;
      background-color: rgba(0, 0, 0, 0.62);
      border-radius: 5px;
      padding: 5px 8px;
      opacity: 0;
      transition: opacity .5s;
      a {
        color: #ffffff;
        font-size: 12px;
      }
    }
  }

</style>
