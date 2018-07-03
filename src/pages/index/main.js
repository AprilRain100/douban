import Vue from 'vue'
import App from './index'
// import store from '../../store/index'
const app = new Vue({
    // store,
    ...App
})
app.$mount()
export default {
    config: {
        navigationBarTitleText: '电影',
        navigationBarBackgroundColor: '#42bd56',
        navigationBarTextStyle: 'white'
    }
}