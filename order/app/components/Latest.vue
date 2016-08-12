<script>
  import { showDetail} from '../vuex/actions';
  import Order from './Order.vue';

  export default {
    name: 'Latest',

    data() {
      return {
      }
    },
    components:{
      'order':Order
    },
    vuex: {
      getters: {
        orders: ({orderList}) => orderList.orders
      },
      actions: {
        showDetail
      },
      computed:{
      }
    }
  }
</script>
<template>
  <div class="container">
    <div class="row">
      <ul class="list-unstyled">
        <order></order>
      </ul>
    </div>
  </div><!-- ./container -->
</template>
<style>

</style>
