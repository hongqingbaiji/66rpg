import request from '@/utils/request.js'
import homeAPI from '@/server/home/index.js'

// 轮播图
export const getSswiperAPI = () => {
  return request.get(homeAPI.Sswiper)
}
// 十频
export const getCatLogAPI = () => {
  return request.get(homeAPI.catLog)
}
// The Best
export const getTheBestAPI = () => {
  return request.get(homeAPI.entrance)
}
// 编推 editor
export const getEditorAPI = () => {
  return request.get(homeAPI.editor)
}
