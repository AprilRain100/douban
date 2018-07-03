import fly from './http'
import qs from 'qs'
import {baseUrl} from './config'

const api = {
  getSalesInfo: params => {
    return fly.post('/user/getSalesInfo', qs.stringify(params))
  },
  in_theaters: () => {
    return fly.get(baseUrl + '/v2/movie/in_theaters')
  },
  coming_soon: () => {
    return fly.post(baseUrl + '/v2/movie/coming_soon')
  },
  search: (params) => {
    return fly.get(`${baseUrl}/v2/movie/search`, params)
  }
};
export default api
