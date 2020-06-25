<template>
  <div class="primary_menu">
    <div class="menu">
      <ul>
        <li>
          <a href="">
            <div class="status index"></div>
            <div class="title">首页</div>
          </a>
        </li>
        <li @mouseover="showdonghua" @mouseleave="hidedonghua">
          <a>
            <div class="status">{{num2999(menuData[1])}}</div>
            <div class="title">动画</div>
          </a>
          <menu-slide ref="donghua">
            <li><a><span>MAD·AMV<i class="arrow"></i></span></a></li>
            <li><a><span>MMD·3D<i class="arrow"></i></span></a></li>
            <li><a><span>短片·手书·配音<i class="arrow"></i></span></a></li>
            <li><a><span>综合<i class="arrow"></i></span></a></li>
          </menu-slide>
        </li>
        <li @mouseover="showfanju" @mouseleave="hidefanju">
          <a>
            <div class="status">{{num2999(menuData[13])}}</div>
            <div class="title">番剧</div>
          </a>
          <menu-slide ref="fanju">
            <li><a><span>连载动画<i class="arrow"></i></span></a></li>
            <li><a><span>完结动画<i class="arrow"></i></span></a></li>
            <li><a><span>资讯<i class="arrow"></i></span></a></li>
            <li><a><span>官方延伸<i class="arrow"></i></span></a></li>
            <li><a><span>新番时间表<i class="arrow"></i></span></a></li>
            <li><a><span>番剧引索<i class="arrow"></i></span></a></li>
          </menu-slide>
        </li>
        <li @mouseover="showguochuang" @mouseleave="hideguochuang">
          <a>
            <div class="status">{{num2999(menuData[165])}}</div>
            <div class="title">国创</div>
          </a>
          <menu-slide ref="guochuang">
            <li><a><span>国产动画<i class="arrow"></i></span></a></li>
            <li><a><span>国产原创相关<i class="arrow"></i></span></a></li>
            <li><a><span>资讯<i class="arrow"></i></span></a></li>
            <li><a><span>布袋戏<i class="arrow"></i></span></a></li>
            <li><a><span>新番时间表<i class="arrow"></i></span></a></li>
            <li><a><span>国产动画引索<i class="arrow"></i></span></a></li>
          </menu-slide>
        </li>
        <li @mouseover="showyinyue" @mouseleave="hideyinyue">
          <a>
            <div class="status">{{num2999(menuData[3])}}</div>
            <div class="title">音乐</div>
          </a>
          <menu-slide ref="yinyue">
            <li><a><span>原创音乐<i class="arrow"></i></span></a></li>
            <li><a><span>翻唱<i class="arrow"></i></span></a></li>
            <li><a><span>VOCALOID·UTAU<i class="arrow"></i></span></a></li>
            <li><a><span>演奏<i class="arrow"></i></span></a></li>
            <li><a><span>三次元音乐<i class="arrow"></i></span></a></li>
            <li><a><span>OP/ED/OST<i class="arrow"></i></span></a></li>
            <li><a><span>音乐选集<i class="arrow"></i></span></a></li>
          </menu-slide>
        </li>
        <li @mouseover="showwudao" @mouseleave="hidewudao">
          <a>
            <div class="status">{{num2999(menuData[129])}}</div>
            <div class="title">舞蹈</div>
          </a>
          <menu-slide ref="wudao">
            <li><a><span>宅舞<i class="arrow"></i></span></a></li>
            <li><a><span>三次元舞蹈<i class="arrow"></i></span></a></li>
            <li><a><span>舞蹈教程<i class="arrow"></i></span></a></li>
          </menu-slide>
        </li>
        <li @mouseover="showyouxi" @mouseleave="hideyouxi">
          <a>
            <div class="status">{{num2999(menuData[4])}}</div>
            <div class="title">游戏</div>
          </a>
          <menu-slide ref="youxi">
            <li><a><span>单机游戏<i class="arrow"></i></span></a></li>
            <li><a><span>电子竞技<i class="arrow"></i></span></a></li>
            <li><a><span>手机游戏<i class="arrow"></i></span></a></li>
            <li><a><span>网络游戏<i class="arrow"></i></span></a></li>
            <li><a><span>桌游棋牌<i class="arrow"></i></span></a></li>
            <li><a><span>GMV<i class="arrow"></i></span></a></li>
            <li><a><span>音游<i class="arrow"></i></span></a></li>
            <li><a><span>电子竞技<i class="arrow"></i></span></a></li>
            <li><a><span>Mugen<i class="arrow"></i></span></a></li>
          </menu-slide>
        </li>
        <li @mouseover="showkeji" @mouseleave="hidekeji">
          <a>
            <div class="status">{{num2999(menuData[36])}}</div>
            <div class="title">科技</div>
          </a>
          <menu-slide ref="keji">
            <li><a><span>纪录片<i class="arrow"></i></span></a></li>
            <li><a><span>趣味科普人文<i class="arrow"></i></span></a></li>
            <li><a><span>野生技术协会<i class="arrow"></i></span></a></li>
            <li><a><span>演讲公开课<i class="arrow"></i></span></a></li>
            <li><a><span>星海<i class="arrow"></i></span></a></li>
            <li><a><span>数码<i class="arrow"></i></span></a></li>
            <li><a><span>机械<i class="arrow"></i></span></a></li>
            <li><a><span>汽车<i class="arrow"></i></span></a></li>
          </menu-slide>
        </li>
        <li @mouseover="showshenghuo" @mouseleave="hideshenghuo">
          <a>
            <div class="status">{{num2999(menuData[160])}}</div>
            <div class="title">生活</div>
          </a>
          <menu-slide ref="shenghuo">
            <li><a><span>搞笑<i class="arrow"></i></span></a></li>
            <li><a><span>日常<i class="arrow"></i></span></a></li>
            <li><a><span>美食圈<i class="arrow"></i></span></a></li>
            <li><a><span>动物圈<i class="arrow"></i></span></a></li>
            <li><a><span>手工<i class="arrow"></i></span></a></li>
            <li><a><span>绘画<i class="arrow"></i></span></a></li>
            <li><a><span>ASMR<i class="arrow"></i></span></a></li>
            <li><a><span>运动<i class="arrow"></i></span></a></li>
            <li><a><span>其他<i class="arrow"></i></span></a></li>
          </menu-slide>
        </li>
        <li @mouseover="showguichu" @mouseleave="hideguichu">
          <a>
            <div class="status">{{num2999(menuData[119])}}</div>
            <div class="title">鬼畜</div>
          </a>
          <menu-slide ref="guichu">
            <li><a><span>鬼畜调教<i class="arrow"></i></span></a></li>
            <li><a><span>音MAD<i class="arrow"></i></span></a></li>
            <li><a><span>人力VOCALOID<i class="arrow"></i></span></a></li>
            <li><a><span>教程演示<i class="arrow"></i></span></a></li>
          </menu-slide>
        </li>
        <li @mouseover="showshishang" @mouseleave="hideshishang">
          <a>
            <div class="status">{{num2999(menuData[155])}}</div>
            <div class="title">时尚</div>
          </a>
          <menu-slide ref="shishang">
            <li><a><span>美妆<i class="arrow"></i></span></a></li>
            <li><a><span>服饰<i class="arrow"></i></span></a></li>
            <li><a><span>健身<i class="arrow"></i></span></a></li>
            <li><a><span>资讯<i class="arrow"></i></span></a></li>
          </menu-slide>
        </li>
        <li @mouseover="showguanggao" @mouseleave="hideguanggao">
          <a>
            <div class="status">{{num2999(menuData[165])}}</div>
            <div class="title">广告</div>
          </a>
          <menu-slide ref="guanggao"></menu-slide>
        </li>
        <li @mouseover="showyule" @mouseleave="hideyule">
          <a>
            <div class="status">{{num2999(menuData[5])}}</div>
            <div class="title">娱乐</div>
          </a>
          <menu-slide ref="yule">
            <li><a><span>综艺<i class="arrow"></i></span></a></li>
            <li><a><span>明星<i class="arrow"></i></span></a></li>
            <li><a><span>Korea相关<i class="arrow"></i></span></a></li>
          </menu-slide>
        </li>
        <li @mouseover="showyingshi" @mouseleave="hideyingshi">
          <a>
            <div class="status">{{num2999(menuData[23]+menuData[11])}}</div>
            <div class="title">影视</div>
          </a>
          <menu-slide ref="yingshi">
            <li><a><span>电影<i class="arrow"></i></span></a></li>
            <li><a><span>电视剧<i class="arrow"></i></span></a></li>
          </menu-slide>
        </li>
        <li>
          <a>
            <div class="status zhuanlan"></div>
            <div class="title">专栏</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status guangchang"></div>
            <div class="title">广场</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status zhibo"></div>
            <div class="title">直播</div>
          </a>
        </li>
        <li>
          <a>
            <div class="status xiaoheiwu"></div>
            <div class="title">小黑屋</div>
          </a>
        </li>
      </ul>
    </div>
    <div class="gif">
      <a href="">
      <img :src="solveImgUrl('http://i0.hdslb.com/bfs/active/d982254ba12cced5ccc2748be4f88b180de57ed4.gif')" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  import api from '@/common/js/api'
  import {num2999, solveImgUrl} from '@/common/js/utils'
  import MenuSlide from '@/base/MenuSlide'

  export default {
    name: '',
    data () {
      return {
        menuData: {}
      }
    },
    components: {
      MenuSlide
    },
    mounted () {
      this.getMenuData()
    },
    methods: {
      num2999,
      solveImgUrl,
      async getMenuData () {
        this.menuData = await api.getMenuData()
      },
      showdonghua () {
        this.$refs.donghua.show()
      },
      hidedonghua () {
        this.$refs.donghua.hide()
      },
      showfanju () {
        this.$refs.fanju.show()
      },
      hidefanju () {
        this.$refs.fanju.hide()
      },
      showguochuang () {
        this.$refs.guochuang.show()
      },
      hideguochuang () {
        this.$refs.guochuang.hide()
      },
      showyinyue () {
        this.$refs.yinyue.show()
      },
      hideyinyue () {
        this.$refs.yinyue.hide()
      },
      showwudao () {
        this.$refs.wudao.show()
      },
      hidewudao () {
        this.$refs.wudao.hide()
      },
      showyouxi () {
        this.$refs.youxi.show()
      },
      hideyouxi () {
        this.$refs.youxi.hide()
      },
      showkeji () {
        this.$refs.keji.show()
      },
      hidekeji () {
        this.$refs.keji.hide()
      },
      showshenghuo () {
        this.$refs.shenghuo.show()
      },
      hideshenghuo () {
        this.$refs.shenghuo.hide()
      },
      showguichu () {
        this.$refs.guichu.show()
      },
      hideguichu () {
        this.$refs.guichu.hide()
      },
      showshishang () {
        this.$refs.shishang.show()
      },
      hideshishang () {
        this.$refs.shishang.hide()
      },
      showguanggao () {
        this.$refs.guanggao.show()
      },
      hideguanggao () {
        this.$refs.guanggao.hide()
      },
      showyule () {
        this.$refs.yule.show()
      },
      hideyule () {
        this.$refs.yule.hide()
      },
      showyingshi () {
        this.$refs.yingshi.show()
      },
      hideyingshi () {
        this.$refs.yingshi.hide()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";
  div.primary_menu {
    font-size: 12px;
    padding-top: 10px;
    div.menu {
      display: inline-block;

      ul {

        li {
          padding-right: 30px;
          float: left;
          position: relative;
          &:hover{
            cursor: pointer;
          }

          div.status {
            width: 30px;
            line-height: 13px;
            margin: 8px 0 4px;
            background-color: $BpinkLight;
            color: white;
            border-radius: 4px;
            text-align: center;

            &:nth-child(1).index {
              margin: 0;
              width: 25px;
              height:26px;
              background: url(http://static.hdslb.com/images/base/icons.png) -660px -1170px no-repeat;
            }
            &.zhuanlan {
              margin: 0;
              width: 25px;
              height:26px;
              background: url(http://static.hdslb.com/images/base/icons.png) -83px -1809px no-repeat;
            }
            &.guangchang {
              margin: 0;
              width: 25px;
              height:26px;
              background: url(http://static.hdslb.com/images/base/icons.png) -83px -2001px no-repeat;
            }
            &.zhibo {
              margin: 0;
              width: 25px;
              height:26px;
              background: url(http://static.hdslb.com/images/base/icons.png) -83px -1874px no-repeat;
            }
            &.xiaoheiwu {
              margin: 0;
              width: 25px;
              height:26px;
              background: url(http://static.hdslb.com/images/base/icons.png) -79px -1939px no-repeat;
            }
          }
          div.title {
            text-align: center;
          }
        }
        &:after {
          content: ',';
          width: 0;
          height: 0;
          clear: both;
          visibility: hidden;
          display: block;
        }
      }
    }
    div.gif {
      display: inline-block;
      vertical-align: top;
    }
  }
</style>
