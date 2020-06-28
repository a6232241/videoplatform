<template>
  <div class="headerSlide" ref="headerSlide">
    <slot></slot>
    <div class="btn">
      <slot name="btn"></slot>
    </div>
  </div>
</template>

<script>
  // import {throttle} from '@/common/js/utils'

  export default {
    name: '',
    methods: {

      show: function () {
        this.$nextTick(() => {
          this.$refs.headerSlide.style.visibility = 'visible'
          this.$refs.headerSlide.style.opacity = 1
        })
      },
      hide: function () {
        this.$nextTick(() => {
          this.$refs.headerSlide.style.visibility = 'hidden'
          this.$refs.headerSlide.style.opacity = 0
        })
      }
    }
  }
</script>

<style  lang="scss" scoped>
  @import "../common/style/variable";
  .headerSlide {
    visibility: hidden;
    opacity: 0;
    z-index: 999;
    box-sizing: border-box;
    width: 360px;
    cursor: pointer;
    background-color: #ffffff;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0 0 4px 4px;
    padding-top: 8px;
    padding-bottom: 8px;
    transition: all 0.3s;
    a {
      color: #000;
    }
    button {
      border: 0;
      background: $btnGrey;
      font-size: 12px;
      outline: none;
      border-radius: 4px;
      line-height: 25px;
      margin: 0 4px;
      cursor: pointer;
      &:hover {
        background: $btnHover;
      }
    }
    li {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      float: none!important;
      font-size: 12px;
      list-style: disc inside none;
      padding: 5px 20px;
      &:hover {
        color: $fontActive!important;
        background-color: $hover!important;
        a {
          color: $fontActive!important;
        }
      }
    }
    div.btn {
      text-align: center;
      padding: 4px 0;
    }
  }
</style>
