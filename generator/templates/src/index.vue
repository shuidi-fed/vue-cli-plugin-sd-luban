<template>
  <img :src="data.src" :style="data.style" @click="toLink"/>
</template>
<script><% if (options.sdAjax) { %>
// 文档：https://wiki.shuiditech.com/pages/viewpage.action?pageId=94110028
import { createAxios, setAjaxDebugState } from 'sd-ajax'
// 开启调试
setAjaxDebugState(true)
const API = createAxios({
  timeout: 8000, // default 15000
  baseURL: '//xxxx.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded' // default
  }
}, {})
console.log(API)
<% } %>
export default {
  name: '<%=rootOptions.projectName%>',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  <% if (options.pxtorem) { %>
  mounted () {
    this.setRem()
    window.onresize = this.setRem
  },
  <% } %>
  methods: {
    /**
     * 鲁班保存项目之前，会先调用此方法
     * 如果返回了字符串，则弹出字符串中内容提示，并阻止后续保存动作
     * 否则将继续保存
     */
    $$lubanSaveHooks () {
      // return 'msg'
      return ''
    },
    <% if (options.pxtorem) { %>
    // 改变窗口大小时重新设置 rem
    setRem() {
      const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
      const htmlDom = document.getElementsByTagName('html')[0]
      htmlDom.style.fontSize = htmlWidth / (750 / 32) + 'px'
    },
    <% } %>
    toLink() {
      if (!this.data.href) return
      // 使用提供的方法跳转，支持按页码跳转
      this.$Utils.href(this.data.href)
    }
  }
}
</script>

<style scoped>
img {
  display: block;
}
</style>

