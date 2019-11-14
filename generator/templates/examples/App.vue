<template>
  <div id="app">
    <<%=rootOptions.projectName%> :data="data"></<%=rootOptions.projectName%>>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        src: 'http://cf-images.oss-cn-shanghai.aliyuncs.com/logo.png',
        style: {
          width: '100%'
        }
      }
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
