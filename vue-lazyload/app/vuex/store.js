// vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  imageList: ['https://pixabay.com/static/uploads/photo/2016/03/09/11/57/grand-canyon-1246248__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/08/17/15/07/diving-1600668__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/08/08/14/57/santorini-1578460__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/08/18/13/43/venice-1602999__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/08/17/15/39/landscape-1600770__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/08/02/23/39/fractals-1565393__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/08/16/22/40/point-arena-lighthouse-1599168__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/08/17/00/43/sky-1599469__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/08/16/22/49/sea-1599183__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/08/13/21/34/sunset-1591599__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/08/12/23/47/yosemite-1590013__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/08/10/16/35/lake-mcdonald-1583738__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/08/12/20/14/yellowstone-national-park-1589616__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/08/12/23/47/yosemite-1590012__340.jpg',
    'https://pixabay.com/static/uploads/photo/2016/03/09/09/42/rock-1245952__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/07/29/19/55/abendstimmung-1555595__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/08/10/18/50/wave-1584050__180.jpg',
    'https://pixabay.com/static/uploads/photo/2016/08/12/23/47/yosemite-1590013__180.jpg'
  ]
}

export default new Vuex.Store({
  //输出
  state
})