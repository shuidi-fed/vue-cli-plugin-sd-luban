<template>
  <img :src="data.src" :style="data.style" @click="toLink"/>
</template>
<script>
export default {
  name: '<%=rootOptions.projectName%>',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
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

