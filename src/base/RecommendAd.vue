<template>
  <div class="ad">
    <a target="_blank" href="//cm.bilibili.com/cm/api/fees/pc/sync/v2?msg=a%7C30%2Cb%7Cbilibili%2Cc%7C1%2Cd%7C1%2Ce%7CCKAiEAAYkgwgACgAMAM4HkIeMTUwNzE3MTM2NTE1MXExNzJhMThhNjFhMjUwcTg1SJ%2Fip9PuK1IJ5Y2X5Lqs5biCWgnmsZ%2Foi4%2FnnIFiBuS4reWbvWgBcAB4AIABAIgB6wWSAQ0xNTMuMy4xNjkuMTYymgEHZGVmYXVsdKABAKgBALIBIM%2FaEoDhdZhDQNLjJVi1CZXns7G8cY3Tf2kg19l8sLDvugEkaHR0cDovL2d3ZHouYmlsaWdhbWUuY29tLyMhbmV3c2xpc3Qv%2Cf%7Cclick_sync_3%2Cg%7C1%2Ch%7C1%2Ci%7C5248611%2Cj%7C%2Ck%7C1507171366215%2Cl%7C29%2Cm%7C1507171364291%2Cn%7C1%2Co%7C&amp;ts=1507171366215" data-target-url="http://gwdz.biligame.com/#!newslist/">
      <img :src="solveImgUrl('http://i0.hdslb.com/bfs/archive/4ac3c3426259a784408bb74a023b3fbc0f8e0f40.jpg@260w_150h.webp')" alt="" width="260" height="150" class="pic">
    </a>
  </div>
</template>

<script>
  import {sec2Time, solveImgUrl} from '@/common/js/utils'

  export default {
    name: '',
    methods: {
      sec2Time,
      solveImgUrl
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";

  div.ad {
    padding-top: 45px;
    img {
      border-radius: 5px;
    }
  }
</style>
