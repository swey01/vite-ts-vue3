// 本地环境配置
module.exports = {
  title: '云上殿堂',
  baseURL: 'http://192.168.1.131:8666', // 本地api请求地址
  baseUrl: '', // mock
  fileApi: 'http://192.168.1.145:8763/',
  uploadUrl: 'http://192.168.1.145:8763/fastDfsController/upload/fileAll',
  uploadUrlThumb: 'http://192.168.1.145:8763/fastDfsController/upload/uploadImageGetThumbImage',
  compressUrl: 'http://192.168.1.145:8763/fastDfsController/upload/uploadImageAndThumbImageByDefaultQuality',
  uploadVideoUrl: 'http://192.168.1.145:8763/fastDfsController/upload/videoPicImage',
  previewUrl: 'https://fastfile.ddrbjt.com/',
  getImgCodeImg: `http://192.168.1.146:8666/business/cloudMemorialHall/index/getWxACode2?page=` // 二维码
}
