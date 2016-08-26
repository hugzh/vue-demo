import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

Vue.config.devtools = true
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './default.png',
  loading: './default.png',
  try: 3 // default 1
});
new Vue({
  el: '#app',
  components: {
    App
  }
})