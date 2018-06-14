<template>
  <div class="jm-footer">
    <router-link class="item" tag="div" to="/home">
      <i class="icon-home"></i>
      <p>首页</p>
    </router-link>
    <router-link class="item" tag="div" to="/categroy">
      <i class="icon-search-1"></i>
      <p>分类</p>
    </router-link>
    <router-link class="item" tag="div" to="/cart">
      <i class="icon-cart"></i>
      <p>购物车</p>
    </router-link>
    <router-link class="item" tag="div" to="/mine">
      <i class="icon-mine"></i>
      <p>我的</p>
    </router-link>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable.styl"
@import "~common/stylus/mixin.styl"
@import "./jm-footer.styl"
</style>
