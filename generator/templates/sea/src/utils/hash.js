/**
 * @author  sunshuhong@shuidihuzhu.com
 * @version 2017-07-20
 * @description  生成随机hash值
 */

export default (len = 32) => {
  let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  let maxPos = $chars.length
  let pwd = ''

  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }

  return pwd
}
