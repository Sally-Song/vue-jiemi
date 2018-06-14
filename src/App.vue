<template>
  <div id="app">
    <jm-header></jm-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <jm-footer></jm-footer>
  </div>
</template>

<script>
import Home from 'components/home/home'
import jmHeader from 'components/jm-header/jm-header'
import jmFooter from 'components/jm-footer/jm-footer'
export default {
  components: {
    jmHeader,
    jmFooter,
    Home
  }
}
</script>
