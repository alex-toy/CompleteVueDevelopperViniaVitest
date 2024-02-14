<template>
  <button type="button" @click="flag=!flag">Toggle</button>

  <transition name="fade">
    <h2 v-if="flag">Hello World</h2>
  </transition>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      flag: false,
    }
  }
}
</script>

<style>
</style>
