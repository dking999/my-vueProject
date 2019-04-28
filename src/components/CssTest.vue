<template>
 <div id="demo">
  <button @click="show=!show"> Toggle</button>
  <transition name="fade">
  <p v-if="show">hello</p>
  </transition>
 </div>
</template>

<script>
export default {
  name: 'CssTest',
  data () {
    return {
      show: true
    }
  }
}
</script>

<style scoped>

</style>
