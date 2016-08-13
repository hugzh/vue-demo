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
  <div class="container-fluid">
    <ul class="list-unstyled row">
      <order></order>
    </ul>
  </div>
</template>
<style>

</style>
