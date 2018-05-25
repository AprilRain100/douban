import Vue from 'vue'
import App from './discover'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '音乐',
    navigationBarBackgroundColor: '#42bd56',
    navigationBarTextStyle: 'white'
  }
}
