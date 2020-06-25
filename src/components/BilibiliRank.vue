<template>
  <div class="rank">
    <div class="itemWarp" v-for="item in rankData" v-if="rankData.length">
      <rank-item :item="item"></rank-item>
    </div>
    <div class="arrow-left" @click="dataLeft">{{rankArr[Math.abs((rankIndex - 1) % 3)]}}</div>
    <div class="arrow-right" @click="dataRight">{{rankArr[Math.abs((rankIndex + 1) % 3)]}}</div>
  </div>
</template>

<script>
  import api from '@/common/js/api'
  import RankItem from '@/base/RankItem'

  export default {
    name: '',
    data () {
      return {
        rankData: [],
        rankArr: ['昨日', '三日', '一周'],
        rankIndex: 1
      }
    },
    created () {
      this.getData()
    },
    methods: {
      dataLeft () {
        this.rankIndex --
        if (this.rankIndex === 0) {
          this.rankIndex = 3
        }
        this.getData(true)
      },
      dataRight () {
        this.rankIndex ++
        this.getData(true)
      },
      async getData (boolean = false) {
        if (boolean) {
          this.rankData = []
        }
        if (Math.abs(this.rankIndex % 3) === 0) {
          this.rankData = await api.getRankDay()
          console.log('昨日数据', this.rankData)
        } else if (Math.abs(this.rankIndex % 3) === 1) {
          this.rankData = await api.getRankThree()
          console.log('三日数据', this.rankData)
        } else {
          this.rankData = await api.getRankWeek()
          console.log('一周数据', this.rankData)
        }
      }
    },
    components: {
      RankItem
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";

    div.rank {
      position: relative;
      width: 720px;
      height: 220px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-left: 20px;
      box-sizing: border-box;
      align-content: space-between;
      &:hover {
        div.arrow-left, div.arrow-right {
          visibility: visible;
          opacity: 1;
        }
      }
      div.arrow-left {
        visibility: hidden;
        transition: opacity 0.3s;
        opacity: 0;
        cursor: pointer;
        position: absolute;
        left: 20px;
        bottom: 30%;
        color: #ffffff;
        font-size: 12px;
        width: 20px;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 0 5px 5px 0;
        text-align: right;
        padding: 8px 10px;
        background-position: 6px -1213px;
        background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons2.png);
      }
      div.arrow-right {
        transition: opacity 0.3s;
        visibility: hidden;
        opacity: 0;
        cursor: pointer;
        position: absolute;
        right: 0;
        bottom: 30%;
        color: #ffffff;
        font-size: 12px;
        width: 20px;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 5px 0 0 5px;
        text-align: left;
        padding: 8px 10px;
        background-position: 25px -1265px;
        background-image: url(//s1.hdslb.com/bfs/static/webssr/home/images/icons2.png);
      }
    }



</style>
