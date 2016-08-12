<script>
  import Nav from './components/Nav.vue'
  import store from './vuex/store'

  export default {
    name: 'App',
    // 注入store到根组件
    store,
    data() {
      return {}
    },

    components: {
      'order-nav': Nav
    }
  }
</script>
<template>
  <div id="app">
    <order-nav></order-nav>
    <router-view></router-view>
  </div>
</template>
