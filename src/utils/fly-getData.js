import fly from './http'
import qs from 'qs'
import {baseUrl, wyy} from './config'

const api = {
  getSalesInfo: params => fly.post('/user/getSalesInfo', qs.stringify(params)),

  in_theaters: () => fly.get(baseUrl + '/v2/movie/in_theaters'),

  coming_soon: () => fly.post(baseUrl + '/v2/movie/coming_soon'),

  search: (params) => fly.get(`${baseUrl}/v2/movie/search`, params),

  moreEssay: (id) => fly.get(`${baseUrl}/v2/movie/subject/${id}/comments`),

  /**
   * 热门歌手
   * @param params
   * limit: 取出数量 , 默认为 50
   * offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
   * @returns {*}
   */
  searchMusic: params => fly.get(wyy + '/top/artists', params),
  banner: () => fly.get(wyy + '/banner'),
  /**
   * 热门歌单
   * @returns {*} 12876179
   */
  hotPlayList: () => fly.get(wyy + '/top/playlist?limit=10&order=new'),
  hot: () => fly.get(wyy + '/user/playlist?id=32953014')
}
export default api
