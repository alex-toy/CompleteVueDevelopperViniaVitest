<template>
  <button type="button" @click="flag=!flag">Toggle</button>

<transition name="fade" mode="out-in">
  <h2 v-if="flag" key="main">Hello World</h2>
  <h2 v-else="flag" key="secondary">Another Hello World</h2>
</transition>

<transition name="zoom">
  <h2 v-if="flag" key="main">Hello</h2>
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
.h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

@keyframes zoom-in {
  
}
</style>
