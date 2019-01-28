// 根据敏感词数组words内容标为红色
export default (words, sensArr) => {
  if (!words) {
    return ''
  }
  if (!sensArr || sensArr.length === 0) {
    return words
  }
  return sensArr.reduce((sofar, sensItem) => {
    const fragment = sofar.split(sensItem)
    return fragment.join(`<span class="danger">${sensItem}</span>`)
  }, words)
}
