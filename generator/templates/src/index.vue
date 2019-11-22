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
<% } %>
export default {
  name: '<%=rootOptions.projectName%>',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
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
    toLink() {
      if (!this.data.href) return
      window.location.href = this.data.href
    }
  }
}
</script>

<style scoped>
img {
  display: block;
}
</style>

