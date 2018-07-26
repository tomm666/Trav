<template>
  <div class="header">
    城市选择
   <router-link to="/">
     <div class="iconfont Header-back">&#xe624;</div>
   </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: $HeaderHeight
    line-height: $HeaderHeight
    text-align: center
    color: #fff
    background: $baColor
    font-size: .32rem
    .Header-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
