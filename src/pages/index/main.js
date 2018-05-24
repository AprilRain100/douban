import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '首页',
    navigationBarBackgroundColor: '#42bd56',
    navigationBarTextStyle: 'white'
  }
}
