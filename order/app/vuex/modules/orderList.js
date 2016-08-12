// vuex/modules/index.js
import {
  SHOW_DETAIL,
  FOLD
} from '../mutation-types'

// 该模块的初始状态
const state = {
  orders: [{
    id: 'aedf9c25',
    tradeDate: '2016.04.08',
    name: 'Nike跑步鞋青年版',
    totalPrice: 888,
    repayDate: '2016.08.08',
    capital: '880',
    interest: '5.5',
    extra: '2.5',
    type: '消费',
    currentTerm: 1,
    totalTerms: 1
  }, {
    id: 'cves9chs',
    tradeDate: '2016.04.10',
    name: '支付宝提现',
    totalPrice: 773.5,
    repayDate: '2016.08.10',
    capital: '769',
    interest: '4.5',
    extra: '0',
    type: '现金',
    currentTerm: 1,
    totalTerms: 4
  }, {
    id: 'deef1d3g',
    tradeDate: '2016.05.15',
    name: '喜洋洋抱枕',
    totalPrice: 204.8,
    repayDate: '2016.08.15',
    capital: '203.5',
    interest: '1.3',
    extra: '0',
    type: '消费',
    currentTerm: 2,
    totalTerms: 3
  }],
  activeOrder: {}
}

// 相关的 mutations
const mutations = {
  [SHOW_DETAIL](state, id) {
    state.activeOrder = state.orders.find(function(ele) {
      return ele.id == id;
    });
  }
}

export default {
  state,
  mutations
}