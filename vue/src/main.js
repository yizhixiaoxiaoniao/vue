import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import VueResource from 'vue-resource'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.use(VueResource)

const vue = new Vue({
  router,
  el: '#app',
  template: '<App />',
  components: {App}
})

vue()
