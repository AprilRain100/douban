/**
 * 已废弃，已找到更高级的方法 捂脸.jpg
 */

import {requestGet} from './reques.js'
import {config as api} from './config.js'

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
export const search = (params, callBack) => {
  requestGet({
    url: api.search,
    data: params
  }).then(res => {
    return typeof params === 'function' ? params(res) : callBack(res)
  })
}
