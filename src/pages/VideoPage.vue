<template>
  <main>
    <div>
      <video ref="videoMain" :src="videoData.path" controls></video>
    </div>
    <h2>{{videoData.title}}</h2>
    <p>作者：{{videoData.author}}</p>
    <p>創建時間：{{videoData.createtime}}</p>
  </main>
</template>

<script>
import axiosApi from '@/common/js/axiosApi'

export default {
  name: 'VideoPage',
  watch: {
    $route: {
      immediate: true,
      handler (to, from) {
        document.title = to.meta.title || 'XXX'
      }
    }
  },
  data () {
    return {
      videoAid: this.$route.params.videoId,
      videoData: null
    }
  },
  methods: {
    async getVideoData () {
      let formdata = new FormData()
      formdata.append('videoAid', this.videoAid)
      this.videoData = await axiosApi.getVideo(formdata)
    },
    videoResize () {
      let video = this.$refs.videoMain
      video.height = window.innerHeight / 1.3
      window.addEventListener('resize', () => {
        video.height = window.innerHeight / 1.3
      })
    }
  },
  created () {
    this.getVideoData()
  },
  updated () {
    this.videoResize()
  }
}
</script>

<style lang="scss">
main {
  & > div {
    text-align: center;
    video {
    }
  }
}
</style>