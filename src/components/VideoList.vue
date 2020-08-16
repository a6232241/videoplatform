<template>
  <div class="list">
    <div v-for="item in videoThumbnails" :key="item">
      <video-item :item="item"></video-item>
    </div>
  </div>
</template>

<script>
import axiosApi from '@/common/js/axiosApi'
import VideoItem from '@/base/VideoItem'

export default {
  name: 'VideoList',
  components: {
    VideoItem
  },
  data () {
    return {
      videoThumbnails: []
    }
  },
  created () {
    this.getVideoThumbnails()
  },
  methods: {
    async getVideoThumbnails () {
      this.videoThumbnails = await axiosApi.getThumbnails()
      console.log(this.videoThumbnails)
    }
  }
}
</script>

<style lang="scss">
  .list {
    display: flex;
    width: 100%;
    & > div {
      align-items: space-between;
      flex-wrap: wrap;
      padding: 20px 0 20px 20px;
    }
  }
</style>