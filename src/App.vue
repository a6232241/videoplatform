<template>
  <div id="app">
    <bilibili-header></bilibili-header>
    <div class="main_warp">
    <bilibili-menu></bilibili-menu>
    <router-view></router-view>
    </div>
    <bilibili-footer></bilibili-footer>
  </div>
</template>

<script>
  import BilibiliHeader from '@/components/BilibiliHeader'
  import BilibiliFooter from '@/components/BilibiliFooter'
  import BilibiliMenu from '@/components/BilibiliMenu'

  export default {
    name: 'app',
    components: {
      BilibiliHeader,
      BilibiliFooter,
      BilibiliMenu
    }
  }
</script>

<style lang="scss" scoped>
#app {
  div.main_warp {
    max-width: 1160px;
    min-width: 990px;
    margin: 0 auto;
  }
}
</style>
