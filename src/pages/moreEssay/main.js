import Vue from 'vue'
import App from './moreEssay'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    navigationBarTitleText: '更多短评',
    navigationBarBackgroundColor: '#42bd56',
    navigationBarTextStyle: 'white'
  }
}
