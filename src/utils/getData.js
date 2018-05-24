import {requestGet} from './reques.js'
import api from './config.js'

export const in_theaters = (params, callBack) => {
  requestGet({
    url: api.in_theaters,
    data: params
  }).then(res => {
    return typeof params === 'function' ? params(res) : callBack(res)
  })
}

export const coming_soon = (params, callBack) => {
  requestGet({
    url: api.coming_soon,
    data: params
  }).then(res => {
    return typeof params === 'function' ? params(res) : callBack(res)
  })
}
