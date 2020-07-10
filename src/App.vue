<template>
  <div id="app">
    <bilibili-header></bilibili-header>
    <div class="main_warp">
      <bilibili-menu v-if="$route.path=='/'"></bilibili-menu>
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
    // 動態分配路由title
    watch: {
      $route: {
        immediate: true,
        handler (to, from) {
          document.title = to.meta.title || '首頁'
        }
      }
    },
    components: {
      BilibiliHeader,
      BilibiliFooter,
      BilibiliMenu
    }
  }
</script>

<style lang="scss" scoped>
#app > * {
  min-width: 980px;
}
div.main_warp {
  margin: 0 15%;
}
</style>
