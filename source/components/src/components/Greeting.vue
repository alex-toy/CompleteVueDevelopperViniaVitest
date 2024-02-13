<template>
    <p v-if="age > 25">{{ message }}</p>
    <p v-else>you must be 25 to see this message</p>
</template>

<script>
export default {
  name: 'Greeting',
  props:['age'],
  data(){
    return {
      message: "Here is the message"
    };
  }
}
</script>

<style scoped lang="scss">
p:hover {
  color:darken(#cc4444, 15%);
}
</style>