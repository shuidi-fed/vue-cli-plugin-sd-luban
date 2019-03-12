<template>
  <div :style="data.style">{{data.context}}</div>
</template>
<script>
export default {
  name: 'SdLubanText',
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
