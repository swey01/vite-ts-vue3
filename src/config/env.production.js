// 环境配置
module.exports = {
  title: '云上殿堂',
  baseURL: '/api/funeral-ysdt-business-web', // 本地api请求地址 // /api/plat-fileserver
  fileApi: '/api/plat-fileserver',
  uploadUrl: '/api/plat-fileserver/fastDfsController/upload/fileAll',
  uploadUrlThumb: '/api/plat-fileserver/fastDfsController/upload/uploadImageGetThumbImage',
  compressUrl: '/api/plat-fileserver/fastDfsController/upload/uploadImageAndThumbImageByDefaultQuality',
  uploadVideoUrl: '/api/plat-fileserver/fastDfsController/upload/videoPicImage',
  previewUrl: 'https://fastfile.101el.com/',
  getImgCodeImg: `/api/funeral-ysdt-business-web/business/cloudMemorialHall/index/getWxACode2?page=` // 二维码
}
