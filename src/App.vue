<template>
  <div id="app" >
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
    
  }
}
</script>

<style lang='less'>
#app {
  font-size:14px;
}

</style>
