import Vue from 'vue'
import App from './discover'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '发现'
  }
}
