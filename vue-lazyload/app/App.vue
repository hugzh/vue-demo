<script>
import ImageList from './components/ImageList.vue'
import store from './vuex/store'
  export default {
    name: 'App',
    store,
    data() {
      return {
      }
    },
    components:{
      'image-list':ImageList
    }
  }
</script>
<template>
  <div class="container-fluid">
    <image-list></image-list>   
  </div>
</template>
