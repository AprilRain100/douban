import Vue from 'vue'
import App from './detail'
import store from '../../store/index'
const app = new Vue({
  store,
  ...App
})
app.$mount()
export default {
  config: {
    // navigationBarTitleText: '详情',
    navigationBarBackgroundColor: '#42bd56',
    navigationBarTextStyle: 'white'
  }
}
