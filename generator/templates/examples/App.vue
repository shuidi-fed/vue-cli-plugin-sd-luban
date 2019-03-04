<template>
  <div id="app">
    <sd-luban-text :data="data"></sd-luban-text>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        style: {
          textAlign: 'center',
          color: '#f90',
          fontSize: '40px',
          background: '#000'
        },
        context: 'test'
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

