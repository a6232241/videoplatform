<template>
  <div class="menuSlide" ref="menuSlide">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '',
    methods: {
      show () {
        this.$refs.menuSlide.style.display = 'block'
      },
      hide () {
        this.$refs.menuSlide.style.display = 'none'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";
  .menuSlide {
    z-index: 999;
    width: 130px;
    position: absolute;
    border-radius: 0 0 5px 5px;
    background-color: #ffffff;
    border: 1px solid rgba(238, 238, 238, 0.43);
    box-sizing: border-box;
    display: none;
    li{
      padding-right: 0!important;
      a {
        position: relative;
        display: block;
        width: 128px;
        box-sizing: border-box;
        transform: translateX(0px);
        transition: all .4s;
        background: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons2.png) no-repeat 12px -1614px;
        span {
          display: inline-block;
          line-height: 30px;
          box-sizing: border-box;
          transform: translateX(24px);
        }
        i {
          width: 30px;
          height: 30px;
          display: inline-block;
          vertical-align: top;
          opacity: 0;
          transform: translateX(25px);
          transition: transform .3s;
          background: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons2.png) no-repeat 0 -1577px;
        }
        &:hover {
          transform: translateX(6px);
          & i {
            transform: translateX(6px);
            opacity: 1;
          }
        }
      }
      &:hover {
        background-color: $hover;
      }
    }

  }
</style>
