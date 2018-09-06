
// var Fly = require('flyio/dist/npm/wx')
import Fly from 'flyio/dist/npm/wx'
import {baseUrl, land} from './config'
const http = new Fly()

//配置请求基地址
// //定义公共headers
http.config.headers={ 'token': 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNTMwNTIwMTI3fQ.0V-ih1EJ6fxzNbc-2HktXdGRP2dOBJDtAumwNFhtovE' }
// //设置超时
// fly.config.timeout=10000;
// //设置请求基地址
// http.config.baseURL= '/api' || baseUrl;

http.interceptors.request.use((request) => {
  request.headers["content-type"]="application/x-www-form-urlencoded";
  wx.showNavigationBarLoading()
  return request
})

http.interceptors.response.use(
    (response, promise) => {
      wx.hideNavigationBarLoading()
      return promise.resolve(response.data)
    },
    (err, promise) => {
      wx.hideNavigationBarLoading()
      wx.showToast({
        title: err.message,
        icon: 'none'
      })
      return promise.resolve()
    }
  )

export default http
