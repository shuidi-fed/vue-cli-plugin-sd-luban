/**
 * 跳转地址封装，如果为数字则跳转对应数字的页面
 * @param {String|Number} url 跳转地址
 */
const href = function (url) {
  if (location.pathname.startsWith('/luban/') && +url) {
    let arr = location.href.split('/')
    arr[5] = url
    location.href = arr.join('/')
  } else {
    location.href = url
  }
}

export default {
  href
}
