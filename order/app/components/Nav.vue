<script>
  export default {
    name: 'nav',
    vuex: {
      getters: {
        current: ({orderList}) => orderList.activeOrder
      }
    }
  }
</script>
<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#" v-link="{ path: '/' }">Vue-订单demo</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li v-link="{ path: '/latest',activeClass:'active'}"><a href="#!">近7天待还 <span class="sr-only">(current)</span></a></li>
          <li v-link="{ path: '/all',activeClass:'active'}"><a href="#!"> 全部待还 </a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

