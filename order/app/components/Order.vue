<script>
  import {fold,showDetail} from '../vuex/actions'
  export default {
    name: 'Order',
    vuex: {
      getters: {
        orders: ({orderList}) => orderList.orders,
        activeOrder:({orderList})=>orderList.activeOrder
      },
      actions:{
        showDetail,
        fold
      }
    }
  }
</script>
<template>
  <li  class="bill" v-for="order in orders" @click="showDetail(order.id)" track-by="id">
   <div>
      <h4>{{order.name}}</h4>
      <p>待还
      <span class="text-danger">{{order.totalPrice}}</span>元&nbsp;&nbsp;
      <span><small>[{{order.currentTerm}}/{{order.totalTerms}}]</small></span>
      </p>
    </div>
    <div class="bill-detail" v-show="order.id==activeOrder.id">
        <p>
        <div class="order-item">最后还款日期：{{order.repayDate}}</div>
        <div class="order-item">交易类型期：{{order.type}}</div>
        <div class="order-item">应还本金：{{order.capital}}元</div>
        <div class="order-item">应还利息：{{order.interest}}元</div>
        <div class="order-item">手续费：{{order.extra}}元</div>
        <div class="order-item">交易日期：{{order.tradeDate}}</div>
        </p> 
    </div>
  </li>
</template>

<style media="screen">
.bill {
  border-top:2px solid #e7e7e7;
  border-bottom: 2px solid #e7e7e7;
  margin: 5px; 
  padding: 10px;
  cursor: pointer;
}
.bill-detail {
  padding: 0 10px;
}
.order-item {
  display: inline-block;
  width: 45%;
}
</style>
