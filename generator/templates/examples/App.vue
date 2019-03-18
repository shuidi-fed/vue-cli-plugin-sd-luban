<template>
  <div id="app">
    <common-image :data="data"></common-image>
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
