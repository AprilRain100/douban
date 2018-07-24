import Vue from 'vue'
import App from './search'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '搜索',
    navigationBarBackgroundColor: '#42bd56',
    navigationBarTextStyle: 'white'
  }
}
