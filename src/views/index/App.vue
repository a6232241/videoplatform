<template>
  <div id="app">
    <bilibili-header :loggedIn="loggedIn" :username="username"></bilibili-header>
    <div class="main_warp">
      <bilibili-menu v-if="$route.path=='/'"></bilibili-menu>
      <router-view :username="username"></router-view>
    </div>
    <bilibili-footer></bilibili-footer>
  </div>
</template>

<script>
  import BilibiliHeader from '@/components/BilibiliHeader'
  import BilibiliFooter from '@/components/BilibiliFooter'
  import BilibiliMenu from '@/components/BilibiliMenu'
  import axiosApi from '@/common/js/axiosApi'

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
    },
    created () {
      this.incsession()
    },
    methods: {
      async incsession () {
        let res = await axiosApi.userIncsession()
        if (res) {
          this.loggedIn = true
          this.username = res.username
        } else {
          this.loggedIn = false
        }
      }
    },
    data () {
      return {
        loggedIn: false,
        username: ''
      }
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
