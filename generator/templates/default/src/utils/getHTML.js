// 将字符串中的换行和空格转换成<br>和&nbsp;
export default (str) => str ? str.replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;') : '<span class="info">[空]</span>'
