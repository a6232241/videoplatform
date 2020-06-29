<template>
  <header>
    <div class="header" :style="{backgroundImage: 'url(' + headerData.pic + ')'}" @mouseover="showTitle" @mouseleave="hideTitle">
      <div class="bgFlur" :style="{backgroundImage: 'url(' + headerData.pic + ')'}">
      </div>
      <div class="barContainer" :class="{black: headerData.style === 1, white: headerData.style !== 1}">
        <div class="bar">
          <div class="index">
            <ul>
              <li class="logo"><a :class="{fontWhite: headerData.style === 1}">主站</a></li>
              <li><a title="画友" :class="{fontWhite: headerData.style === 1}">画友</a></li>
              <li><a title="游戏中心" :class="{fontWhite: headerData.style === 1}">游戏中心</a></li>
              <li><a title="直播" :class="{fontWhite: headerData.style === 1}">直播</a></li>
              <li><a title="会员购" :class="{fontWhite: headerData.style === 1}">会员购</a></li>
              <li><a title="周边" :class="{fontWhite: headerData.style === 1}">周边</a></li>
              <li @mouseover="showQR"  @mouseleave="hideQR">
                <a title="移动端" :class="{fontWhite: headerData.style === 1}">移动端</a>
                <div class="mobile" ref="mobileQR">
                  <div class="qr">
                  </div>
                </div>
              </li>
              <li @mouseover="showMengzhan" @mouseleave="hideMengzhan">
                <a title="萌站" :class="{fontWhite: headerData.style === 1}">萌站</a>
                <HeaderSlide class="mengzhan" ref="mengzhan">
                  <div class="title">前线动态</div>
                  <ul>
                   <li>
                     <img :src="solveImgUrl('https://i0.hdslb.com/bfs/bangumi/b2e080c557bff6870ed7c0ce8508318d86360206.jpg_280x85.jpg')">
                   </li>
                    <li>
                      <img :src="solveImgUrl('https://i0.hdslb.com/bfs/bangumi/e6a31c225e6762bfa2a5531887793687c358c82e.jpg_280x85.jpg')">
                    </li>
                  </ul>
                </HeaderSlide>
              </li>
            </ul>
          </div>
          <div class="user">
            <BilibiliLogin></BilibiliLogin>
            <!-- <ul v-if="loggedIn"> -->
              <ul>
              <li class="user" @mouseover="avatarBigger" @mouseleave="avatarSmaller">
                <div class="detail" ref="userDetail">
                  <div class="username"><a href="https://github.com/summerscar/bilibli-vue " target="_blank">bilibli-vue</a></div>
                  <div class="up">
                    <div class="left">
                      <a href="https://account.bilibili.com/site/home" title="硬币" target="_blank">
                        <span class="coin_icon">
                        </span>
                        <span class="coin_text text">
                          666
                        </span>
                      </a>
                      <a href="https://account.bilibili.com/site/home" title="B币" target="_blank">
                        <span class="bcoin_icon">

                        </span>
                        <span class="bcoin_text text">
                          666
                        </span>
                      </a>
                    </div>
                    <div class="right">
                      <a href="https://account.bilibili.com/" class="mail" target="_blank" title="邮箱" data-attr="已绑定"></a>
                      <a href="https://account.bilibili.com/" class="mobile" target="_blank" title="手机" data-attr="已绑定"></a>
                    </div>
                  </div>
                  <div class="lever">
                    <span class="lever_text">等级</span>
                    <span class="lever_num">
                      <span class="bar_back">
                        <span class="lever_front"></span>
                        <span class="lerver_detail">14400/<span class=" lerver_detail_sum">28800</span></span>
                      </span>
                    </span>
                  </div>
                  <div class="down">
                    <ul>
                      <li><a href="" ><i style="background: url(//static.hdslb.com/images/base/icons.png) no-repeat -472px -407px"></i><span>个人中心</span></a></li>
                      <li><a href=""><i style="background: url(//static.hdslb.com/images/base/icons.png) no-repeat -536px -1046px"></i><span>投稿管理</span></a></li>
                      <li><a href=""><i style="background: url(//static.hdslb.com/images/base/icons.png) no-repeat -472px -472px"></i><span>B币钱包</span></a></li>
                      <li><a href=""><i style="background: url(//static.hdslb.com/images/base/icons.png) no-repeat -473px -855px"></i><span>直播中心</span></a></li>
                      <li><a href=""><i style="background: url('//static.hdslb.com/images/base/icon-ticket.png') -2px 0"></i><span>会员购订单</span></a></li>
                    </ul>
                  </div>
                  <div class="exit">
                    <a href="">退出</a>
                  </div>
                </div>
                <a href="https://github.com/summerscar/bilibli-vue " target="_blank">
                  <div class="avatar" ref="avatar"></div>
                </a>
              </li>
              <li class="msg" @mouseover="showMsgContainer" @mouseleave="hideMsgContainer">
                <a class="userControl" href="" title="消息" :class="{fontWhite: headerData.style === 1}">消息</a>
                <div class="msgContainer" ref="msgContainer" >
                  <ul>
                    <li><a>回复我的</a></li>
                    <li><a>@我的</a></li>
                    <li><a>收到的赞</a></li>
                    <li><a>系统通知</a></li>
                    <li><a>我的消息</a></li>
                  </ul>
                </div>
              </li>
              <li @mouseover="showCondition" @mouseleave="hideCondition">
                <a class="userControl" href="" title="动态" :class="{fontWhite: headerData.style === 1}">动态</a>
                <div class="condition" ref="condition">
                  <div class="menu">
                    <ul>
                      <li @click="conditionActive = 1" :class="{conditionOn: conditionActive=== 1}">视频</li>
                      <li @click="conditionActive = 2" :class="{conditionOn: conditionActive=== 2}">直播</li>
                      <li @click="conditionActive = 3" :class="{conditionOn: conditionActive=== 3}">画友</li>
                      <li @click="conditionActive = 4" :class="{conditionOn: conditionActive=== 4}">专栏</li>
                    </ul>
                    <div class="line" :style="{left: 43+(conditionActive*40)+'px'}"></div>
                    <div class="noCondition">暂时没有动态了哦</div>
                    <div class="historyHint">历史动态</div>
                    <button>查看全部</button>
                  </div>
                </div>
              </li>
              <li @mouseover="showLookLater" @mouseleave="hideLookLater">
                <a class="userControl" href="" title="稍后再看" :class="{fontWhite: headerData.style === 1}">稍后再看</a>
                <HeaderSlide class="lookLater" ref="lookLater">
                  <ul>
                    <li>
                      <a href="https://bangumi.bilibili.com/anime/6339/play#113364" target="_blank">欢迎来到实力至上主义的教室 : 第12话</a>
                    </li>
                    <li><a>妄想学生会 剧场版</a></li>
                    <li><a>【BML2017主题2233娘】 交织together</a></li>
                  </ul>
                  <button slot="btn">播放全部<span> ></span></button>
                  <button slot="btn">查看全部<span> ></span></button>
                </HeaderSlide>
              </li>
              <li @mouseover="showFav" @mouseleave="hideFav">
                <a class="userControl" href="" title="收藏夹" :class="{fontWhite: headerData.style === 1}">收藏夹</a>
                <HeaderSlide class="fav" ref="fav">
                  <ul>
                    <li><a>欢迎来到实力至上主义的教室 : 第12话</a></li>
                    <li><a>妄想学生会 剧场版</a></li>
                    <li><a>【BML2017主题2233娘】 交织together</a></li>
                  </ul>
                  <button slot="btn">播放全部<span> ></span></button>
                  <button slot="btn">查看全部<span> ></span></button>
                </HeaderSlide>
              </li>
              <li @mouseover="showHistory" @mouseleave="hideHistory">
                <a class="userControl" href="" title="历史" :class="{fontWhite: headerData.style === 1}">历史</a>
                <HeaderSlide class="history" ref="history">
                  <div class="today">今日</div>
                  <ul>
                    <li><a>【Lex】震惊，二次元公司居然是这个样子的！</a></li>
                    <li><a>周刊哔哩哔哩排行榜#380</a></li>
                  </ul>
                  <div class="kino">昨日</div>
                  <ul>
                    <li><a>病名为爱 翻唱（YUKIriXHanser)</a></li>
                    <li><a>papi的办公室玩耍——粤语音调说普通话</a></li>
                  </ul>
                  <button slot="btn">查看更多<span> ></span></button>
                </HeaderSlide>
              </li>
              <li class="tougao" @mouseover="showtougao" @mouseleave="hidetougao">
                <a class="userControl" href="" title="投稿">投 稿</a>
                <div class="tougaoContainer" ref="tougaoContainer">
                  <ul>
                    <li>
                      <a style="background:url(//static.hdslb.com/images/base/icons.png) no-repeat -505px -906px;">专栏投稿</a>
                    </li>
                    <li>
                      <a style="background:url(//static.hdslb.com/images/base/icons.png) no-repeat -507px -970px;">音频投稿</a>
                    </li>
                    <li>
                      <a style="background:url(//static.hdslb.com/images/base/icons.png) no-repeat -442px -906px;">视频投稿</a>
                    </li>
                    <li>
                      <a style="background:url(//static.hdslb.com/images/base/icons.png) no-repeat -442px -970px;">投稿管理</a>
                    </li>
                    <li>
                      <a style="background:url(//static.hdslb.com/images/base/icons.png) no-repeat -442px -1737px;">创作中心</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a href=""><img class="logo" :src="headerData.litpic"></a>
      <a v-if="headerData.name" class="headerTitle" :href="headerData.url" target="_blank" ref="headerTitle">{{headerData.name}}</a>
      <div class="search">
        <a href=""><span class="title">排行榜</span></a>
        <div>
          <input type="text" :placeholder="defaultWord.show"><button></button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import {solveImgUrl} from '@/common/js/utils'
  import HeaderSlide from '@/base/HeaderSlide'
  import BilibiliLogin from '@/base/BilibiliLogin'
  import api from '@/common/js/api'

  export default {
    name: '',
    data () {
      return {
        conditionActive: 1,
        headerData: {},
        defaultWord: {}
      }
    },
    components: {
      HeaderSlide,
      BilibiliLogin
    },
    created () {
      this.getHeaderData()
      this.getDefaultWord()
    },
    methods: {
      solveImgUrl,
      async getDefaultWord () {
        this.defaultWord = await api.getDefaultWord()
      },
      async getHeaderData () {
        let res = await api.getHeaderData()
        res.pic = solveImgUrl(res.pic)
        res.litpic = solveImgUrl(res.litpic)
        this.headerData = res
      },
      showTitle () {
        if (!this.headerData.name) return
        this.$refs.headerTitle.style.opacity = 1
      },
      hideTitle () {
        if (!this.headerData.name) return
        this.$refs.headerTitle.style.opacity = 0
      },
      avatarBigger: function () {
        this.$nextTick(() => {
          this.$refs.avatar.style.transform = 'scale(1.7)'
          this.$refs.avatar.style.border = '1px solid white'
          this.$refs.userDetail.style.transform = 'scale(1,1)'
        })
      },
      avatarSmaller: function () {
        this.$nextTick(() => {
          this.$refs.avatar.style.transform = 'scale(1)'
          this.$refs.avatar.style.border = '0'
          this.$refs.userDetail.style.transform = 'scale(1,0)'
        })
      },
      showQR: function () {
        this.$nextTick(() => { this.$refs.mobileQR.style.display = 'block' })
      },
      hideQR: function () {
        this.$nextTick(() => { this.$refs.mobileQR.style.display = 'none' })
      },
      showMsgContainer: function () {
        this.$nextTick(() => {
          this.$refs.msgContainer.style.visibility = 'visible'
          this.$refs.msgContainer.style.opacity = 1
        })
      },
      hideMsgContainer: function () {
        this.$nextTick(() => {
          this.$refs.msgContainer.style.visibility = 'hidden'
          this.$refs.msgContainer.style.opacity = 0
        })
      },
      showtougao: function () {
        this.$nextTick(() => {
          this.$refs.tougaoContainer.style.display = 'block'
        })
      },
      hidetougao: function () {
        this.$nextTick(() => {
          this.$refs.tougaoContainer.style.display = 'none'
        })
      },
      showCondition: function () {
        this.$nextTick(() => {
          this.$refs.condition.style.visibility = 'visible'
          this.$refs.condition.style.opacity = 1
        })
      },
      hideCondition: function () {
        this.$nextTick(() => {
          this.$refs.condition.style.visibility = 'hidden'
          this.$refs.condition.style.opacity = 0
        })
      },
      showLookLater () {
        this.$refs.lookLater.show()
      },
      hideLookLater () {
        this.$refs.lookLater.hide()
      },
      showFav () {
        this.$refs.fav.show()
      },
      hideFav () {
        this.$refs.fav.hide()
      },
      showHistory () {
        this.$refs.history.show()
      },
      hideHistory () {
        this.$refs.history.hide()
      },
      showMengzhan: function () {
        this.$nextTick(() => {
          this.$refs.mengzhan.$el.style.visibility = 'visible'
          this.$refs.mengzhan.$el.style.opacity = 1
        })
      },
      hideMengzhan: function () {
        this.$nextTick(() => {
          this.$refs.mengzhan.$el.style.visibility = 'hidden'
          this.$refs.mengzhan.$el.style.opacity = 0
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../common/style/variable";
  .fontWhite {
    color: #ffffff!important;
  }
  .fontBlack {
    color: #000;
  }
  .white {
    background-color: rgba(255,255,255,0.4);
  }
  .black {
    background-color: rgba(0,0,0,0.4);
  }

  .conditionOn:after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #66ccff;
    font-size: 15px;
    top: 22px;
    left: 16px;
  }

  header {
    width: 100%;


    div.header{
      height: 170px;
      background-position: center;
      position: relative;

      div.bgFlur {
        width: 100%;
        position: absolute;
        top:-20px;
        filter: blur(4px);
        background-position: 50% 10px;
        height: 62px;
      }

      div.barContainer {
        position: absolute;
        height: 42px;
        width: 100%;

        div.bar{
          max-width: $max-width;
          min-width: $min-width;
          margin:0 auto;
          height: 100%;
          a:hover{
            text-decoration: none;
          }
          div.index {
            float: left;
            li{
              float: left;
              line-height: 42px;
              font-size:12px;
              padding: 0 10px;
              position: relative;

              div.mobile {
                cursor: default;
                position: absolute;
                background-image: url(data:image/png;base64,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);
                height: 174px;
                width: 259px;
                left: -21px;
                display: none;
                div.qr {
                  position: absolute;
                  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABhAQMAAAD8yF3gAAAABlBMVEUzMzP///8jKH/HAAABg0lEQVQ4y43SMa6rMBAF0Iss8Rtkt3RsgZIqbCUrCUiWXraFxEbsHVC6QJl/B4JeRBJ4U0Q+UoTHdwYs8UjIegBnih7DU06m6GUU/qRjWdTRu+GSeZSLRFz6pmB4eFXVuwNlm+b28UeFxppV2qfqrn3uxQqwQPx9uy3rLwqgskUiMqNLF8dDfyigBq5lXjTXcVVzre7zFwElWAMQKgaLRLi0F5an4VUPBmB437HA0C2vMY73uSF3YstLJp8EGCDPBEZVB5WTUO2FVSjW1rkOEhJlz2T6NcpFoaIs2ug5xJ2WogJuhhouRdOldm668V01KGZ9M5vkx8mjOtKWfAIMtBe9GKn+rFqT3zROmQ9mmnVJ9wL0nxqOUf0Tj6GNTPdMKDRdwALQuFprfr4IrcWzRCSKpDrKu1gxuYENvSinqv5UnINKt0Am6W+6IRj3sqg5njKH1qpO7gH2s/Tjm6KgmlzqhnP5dVCbgu4Eb/8kbGKfUSAS2nexeEAOA/MUX1twfof6D9FQrIXlpt0nAAAAAElFTkSuQmCC);
                  background-repeat: no-repeat;
                  height: 100px;
                  width: 100px;
                  left: 82px;
                  top: 30px;
                }
              }

              &:hover {
                cursor: pointer;
                background-color: rgba(255,255,255,0.3);
              }

              &:nth-child(1).logo {
                background-image: url(http://static.hdslb.com/images/base/icons.png);
                background-position:-910px -74px;

                 a{
                   padding-left: 20px;
                 }
              }
              div.mengzhan {
                position: absolute;
                left: 0;
                width: 300px;
                height: 250px;
                opacity: 0;
                visibility: hidden;
                div.title {
                  font-size: 12px;
                  line-height: 100%;
                  padding: 8px 15px;
                  font-weight: bold;
                }
                li {
                  padding: 10px 10px;
                  line-height: 100%;
                  overflow: visible;
                  height: 85px;
                  list-style: none;
                }
              }
            }
          }
          div.user {
            float: right;
            li {
              float: left;

              position: relative;
              a.userControl {
                color: black;
                line-height: 42px;
                font-size:12px;
                padding: 0 10px;
                display: inline-block;
              }
              &:nth-child(1).user {
                display: inline;
                width: 64px;
                line-height: 42px;
                font-size:12px;
                padding: 0;
              }
              &:nth-last-child(1).tougao{
                background-color: $Bpink;
                border-radius: 0 0 8px 8px;
                &:hover {
                  background-color: $BpinkLight;
                }
                a {
                  font-size: 14px;
                  padding: 0 15px;
                  color: #ffffff;
                  line-height: 48px;
                }
                div.tougaoContainer {
                  position: absolute;
                  left: -299px;
                  top: 42px;
                  display: none;
                  ul {
                    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
                    li {
                      background-color: white;
                      &:nth-child(1) {
                        border-radius: 0 0 0 7px
                      }
                      &:nth-last-child(1) {
                        border-radius: 0 0 7px 0
                      }
                      a {
                        color: $Bpink;
                        display: block;
                        width: 72px;
                        height: 64px;
                        text-align: center;
                        line-height: 30px;
                        font-size: 12px;
                        padding: 34px 0 0;
                        box-sizing: border-box;
                      }
                      &:hover {
                        background-color: $hover;
                      }
                    }
                    &:after {
                      content: '.';
                      width: 0;
                      height: 0;
                      visibility: hidden;
                      display: block;
                      clear: both;
                    }
                  }

                }
              }
              div.avatar {
                position: relative;
                z-index: 2;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background-image: url(http://static.hdslb.com/images/base/icons.png);
                background-position:-910px -77px;
                transition: transform 0.5s;
                transform-origin: 50% -15px;
                border: 0;
                margin: 3px auto;
              }
              div.detail {
                z-index: 1;
                width: 260px;
                height: 320px;
                background-color: #ffffff;
                position: absolute;
                left: -100px;
                top: 42px;
                transform: scale(1,0);
                transition: all 0.3s;
                transform-origin: 50% 0;
                cursor: default;
                padding: 40px 30px 0;
                border-radius: 0 0 3px 3px;
                box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
                box-sizing: border-box;
                div.username {
                  text-align: center;
                  font-weight: bold;
                  font-size: 15px;
                }
                div.up {
                  line-height: 100%;
                  padding: 8px 0;
                  &:after{
                    content: '.';
                    clear: both;
                    width: 0;
                    height: 0;
                    display: block;
                    visibility: hidden;
                  }
                  div.left {
                    float: left;
                    span{
                      display: inline-block;
                    }
                    span.coin_icon {

                      background-image: url(http://static.hdslb.com/images/base/icons.png);
                      background-position: -343px -471px;
                      width: 18px;
                      height: 18px;
                      vertical-align: top;
                    }
                    span.bcoin_icon {
                      margin-left: 10px;
                      background-image: url(http://static.hdslb.com/images/base/icons.png);
                      background-position: -407px -471px;
                      width: 18px;
                      height: 18px;
                      vertical-align: top;
                    }
                    span.text {
                      line-height: 18px;
                    }
                  }
                  div.right {
                    float: right;
                    a {
                      background-image: url(http://static.hdslb.com/images/base/icons.png);
                      width: 18px;
                      height: 18px;
                      display: inline-block;
                      position: relative;
                      vertical-align: top;
                      &.mail {
                        background-position: -343px -534px;
                        margin-right: 10px;
                        &:after{
                          position: absolute;
                          content: attr(data-attr);
                          font-size: 12px;
                          left: -50px;
                          top:0;
                          border:1px solid #e8e8e8;
                          padding: 2px 5px;
                          border-radius: 5px;
                          color: #000;
                          opacity: 0;
                          transition: opacity .2s;
                          background-color: #ffffff;
                          pointer-events: none;
                        }
                        &:hover:after {
                          opacity: 1;
                        }
                      }
                      &.mobile {
                        background-position: -343px -599px;
                        &:after{
                          position: absolute;
                          content: attr(data-attr);
                          font-size: 12px;
                          left: -55px;
                          top:0;
                          border:1px solid #e8e8e8;
                          padding: 2px 5px;
                          border-radius: 5px;
                          color: #000;
                          opacity: 0;
                          background-color: #ffffff;
                          transition: opacity .2s;
                          pointer-events: none;
                        }
                        &:hover:after {
                          opacity: 1;
                        }
                      }
                    }
                  }
                }
                div.lever {
                  border-bottom: 1px solid #eeeeee;
                  vertical-align: top;
                  line-height: 100%;
                  padding: 20px 0 20px;
                  span.lever_text {
                    line-height:18px;
                    vertical-align: top;
                  }
                  span.lever_num {
                    vertical-align: top;
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background-color: #f3cb85;
                    background-position: -153px -188px;
                    position: relative;
                    background-image: url(data:image/png;base64,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);

                    span.bar_back {
                      width: 154px;
                      height: 7px;
                      background-color: rgba(214, 214, 214, 0.33);
                      position: absolute;
                      left: 16px;
                      top: 5px;

                      span.lever_front {
                        width: 50%;
                        height: 7px;
                        background-color: #f3cb85;
                        position: absolute;
                      }
                      span.lerver_detail {
                        position: absolute;
                        font-size: 12px;
                        top:8px;
                        right: 0;

                        span.lerver_detail_sum {
                          color: rgba(214, 214, 214, 1)
                        }
                      }
                    }
                  }
                }
                div.down ul{
                  padding-top: 10px;
                  &:after{
                    content: '.';
                    clear: both;
                    width: 0;
                    height: 0;
                    display: block;
                    visibility: hidden;
                  }
                  li {
                    width: 100px;
                    padding: 0;
                    text-align: left;
                    line-height: 30px;
                    a {
                      display: inline-block;
                      color: #000;
                      i {
                        vertical-align: top;
                        display: inline-block;
                        margin-right: 8px;
                        width: 20px;
                        height: 16px;
                      }
                      span{
                        display: inline-block;
                        vertical-align: top;
                        line-height: 20px;
                      }
                      &:hover {
                        color: #66ccff;
                      }
                    }
                  }
                }
              }
              div.condition {
                z-index: 999;
                box-sizing: border-box;
                padding: 0 20px;
                width: 360px;
                height: 410px;
                background-color: #ffffff;
                position: absolute;
                left: -160px;
                box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
                border-radius: 0 0 8px 8px;
                visibility: hidden;
                opacity: 0;
                transition: all 0.3s;
                div.menu {
                  cursor: default;
                  ul {
                    cursor: pointer;
                    display: flex;
                    padding: 30px 0 20px;
                    justify-content: center;
                    li {
                      float: none;
                      font-size: 12px;
                      width: 40px;
                      text-align: center;
                      position: relative;
                    }
                  }
                  div.line {
                    width: 30px;
                    height: 2px;
                    background-color: #66ccff;
                    position: relative;
                    top: -12px;
                    transition: left 0.2s;
                  }
                  div.noCondition {
                    color: $fontGrey;
                    width: 100%;
                    font-size: 12px;
                    text-align: center;
                  }
                  div.historyHint {
                    margin-top: 30px;
                    color: $fontGrey;
                    width: 100%;
                    font-size: 12px;
                    text-align: center;
                    position: relative;
                    &:before {
                      content: ' ';
                      width: 121px;
                      height: 1px;
                      background-color: $fontGrey;
                      position: absolute;
                      top: 9px;
                      left: 5px;
                      opacity: 0.3;
                    }
                    &:after {
                      content: ' ';
                      width: 121px;
                      height: 1px;
                      background-color: $fontGrey;
                      position: absolute;
                      top: 9px;
                      right: 5px;
                      opacity: 0.3;
                    }
                  }
                  button {
                    border:0;
                    background: $btnGrey;
                    font-size: 12px;
                    outline: none;
                    display: block;
                    margin: 230px auto 0;
                    width: 100%;
                    padding: 7px 0 7px;
                    border-radius: 5px;
                    cursor: pointer;
                    &:hover {
                      background: $btnHover;
                    }
                  }
                }
              }
              div.msgContainer {
                z-index: 999;
                position: absolute;
                width: 110px;
                height: 200px;
                background-color: #ffffff;
                left: -32px;
                box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
                visibility: hidden;
                opacity: 0;
                transition: all 0.3s;
                border-radius: 0 0 5px 5px;
                li {
                  width: 100%;
                  float: none;
                  display: block;
                  a {
                    text-align: center;
                    line-height:40px;
                    font-size: 12px;
                    display: block;
                    &:hover {
                      color: #00a1d6;
                      background-color: $hover;
                    }
                  }
                }
              }
              div.lookLater {
                position: absolute;
                left: -145px;
                button {
                  width: 45%;
                }
              }
              div.fav {
                position: absolute;
                left: -145px;
                button {
                  width: 45%;
                }
              }
              div.history {
                position: absolute;
                left: -145px;
                div.today,div.kino {
                  font-size: 12px;
                  padding: 3px 15px;
                  position: relative;
                  &:after {
                    content: ' ';
                    width: 80%;
                    height: 1px;
                    background-color: $line;
                    position: absolute;
                    left: 53px;
                    top:11px;
                  }
                }
                button {
                  width: 90%;
                }
              }
            }
            &:hover {
              cursor: pointer;
            }
            div.exit {
              position: absolute;
              bottom:0;
              width: 100%;
              background-color: #F4F5F7;
              text-align: right;
              left: 0;
              padding: 0 20px;
              line-height: 35px;
              box-sizing: border-box;
              a:hover {
                color: #66ccff;
              }
            }
          }
        }
      }
      img.logo {
        position: absolute;
        top: 58px;
        left:50%;
        transform: translateX(-246%);
      }
      a.headerTitle {
        position: absolute;
        left: 50%;
        top:115px;
        display: inline-block;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.65);
        line-height: 25px;
        color: white;
        font-size: 14px;
        transform: translateX(-326px);
        padding: 3px 15px;
        transition: all .3s;
        opacity: 0;
      }
      div.search {
        z-index: 0;
        position: absolute;
        left: 50%;
        top: 66%;
        transform: translateX(250px);
        a {
          vertical-align: top;
          display: inline-block;
          background-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
          border-radius: 3px;
          transition: all 0.2s;
          span.title {
            display: inline-block;
            font-size: 12px;
            line-height: 32px;
            padding-left: 26px;
            padding-right: 5px;
            color: $BpinkText;
            background: url(//static.hdslb.com/images/base/icons.png) -659px -657px no-repeat
          }
          &:hover {
            background-color: rgba(255, 255, 255, 1);
          }
        }
        div {
          vertical-align: top;
          display: inline-block;
          background-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
          border-radius: 3px;
          transition: all 0.2s;
          input {
            padding: 0 3px;
            width: 200px;
            line-height: 30px;
            font-size: 12px;
            outline: 0;
            border: 0;
            display: inline-block;
            vertical-align: top;
            background-color: transparent;
          }
          button {
            vertical-align: top;
            background: url(//static.hdslb.com/images/base/icons.png) -653px -720px;
            width: 48px;
            height: 32px;
            border:0;
          }
          &:hover {
            background-color: rgba(255, 255, 255, 1);
          }
        }

      }
    }
  }
</style>
