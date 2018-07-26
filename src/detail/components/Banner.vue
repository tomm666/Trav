<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt=""/>
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe632;</span>{{this.bannerImgs.length}}</div>
      </div>
    </div>
   <fade-animation>
     <CommonGallary  :imgs="imgs" v-show="showGallary"
                     @close="handleGallaryclose"
       ></CommonGallary>
   </fade-animation>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false,
      imgs: Array
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryclose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
        display: flex
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .6rem
        background-images: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0, .8))
        .banner-title
          flext: 1
          font-size: .32rem
          padding: 0 .2rem
        .banner-number
          height: .32rem
          line-height: .32rem
          padding: 0 .4rem
          margin-top: .14rem
          border-redius: .2rem
          backgroud: rgba(0, 0, 0, .8)
          font-size: .24rem
          .banner-icon
            font-size: .24rem
</style>
