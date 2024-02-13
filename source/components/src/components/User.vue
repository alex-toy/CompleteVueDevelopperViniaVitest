<template lang="">
    <button type="button" @click="increaseAge">Increase age</button>
    <button type="button" @click="decreaseAge">Decrease age</button>
    <button type="button" @click="increaseAgeBy3">Increase age by 3</button>
    <p>The user {{name}} is {{age}} years old</p>
</template>

<script>
export default {
    name:"User",
    props: [ "age", "name"],
    methods:{
        increaseAge(){
            this.$emit('increase-age');
        },
        decreaseAge(){
            this.$emit('decrease-age');
        },
        increaseAgeBy3(){
            this.$emit('decrease-age-batch', 3);
        }
  }
}
</script>

<style lang="">
    
</style>