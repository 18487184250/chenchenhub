
import axios from '@/axios.js'

var api = {
  getSearchHotWords () {
    return axios.get('/api/meituan/header/searchHotWords.json')
  },
  getSearchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  resultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  goodsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getHotCityList () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getRecentCitysList () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  getLogin (params) {
    return axios.get('/api/meituan/login', params)
  },
  getRegister (params) {
    return axios.get('/api/meituan/register', params)
  }

}

export default api
