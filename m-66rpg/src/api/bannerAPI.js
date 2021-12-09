import request from '@/utils/request.js'

export const getBannerAPI = () => {
  return request.get('/ajax/indexNew/m_index_banner.json')
}
