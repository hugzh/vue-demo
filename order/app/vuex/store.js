// vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
// 导入各个模块的初始状态和 mutations
import orderList from './modules/orderList'

Vue.use(Vuex)

export default new Vuex.Store({
  // 组合各个模块
  modules: {
    orderList
  }
})