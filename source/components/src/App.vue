<template>
  <h3>hello!</h3>
  <greeting :age="age"></greeting>
  <user :age="age" :name="'alex'" @increase-age="age++" @decrease-age="age--" @decrease-age-batch="increaseAgeBy3"></user>
</template>

<script>
import Greeting from '@/components/Greeting.vue'
import User from '@/components/User.vue'

export default {
  name: 'App',
  components:{
    Greeting,
    User
  },
  data(){
    return {
      age: 20,
    };
  },
  methods:{
    increaseAgeBy3(delta){
      this.age += delta;
    }
  }
}
</script>

<style scoped>
</style>
