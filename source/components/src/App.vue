<template>
  <h3>hello!</h3>
  <greeting :age="age"></greeting>
  <user :age="age" :name="'alex'" 
    @increase-age="age++" 
    @decrease-age="age--" 
    @decrease-age-batch="increaseAgeBy3"
    :ageChangeFn="updateAgeCB"
  ></user>

  <app-form></app-form>
  
  <app-form>
    <form action="">
      <div class="help">
        <p>this is some text</p>
      </div>
      <div class="fields">
        <input type="text" placeholder="email">
        <input type="text" placeholder="username">
        <input type="password" placeholder="password">
      </div>
      <div class="buttons">
        <button type="submit">Submit</button>
      </div>
    </form>
  </app-form>
  
  <app-form>
      <template v-slot:help><p>{{ help }}</p></template>
      <template v-slot:fields><p>fields</p></template>
      <template v-slot:buttons><p>buttons</p></template>
  </app-form>

</template>

<script>
import Greeting from '@/components/Greeting.vue'
import User from '@/components/User.vue'
import AppForm from '@/components/Form.vue'

export default {
  name: 'App',
  components:{
    Greeting,
    User,
    AppForm
  },
  data(){
    return {
      age: 20,
      help: "this is some help text"
    };
  },
  methods:{
    increaseAgeBy3(delta){
      this.age += delta;
    },
    updateAgeCB(num){
      this.age -= num;
    }
  }
}
</script>

<style scoped>
</style>
