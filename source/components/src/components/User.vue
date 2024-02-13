<template lang="">
    <button type="button" @click="increaseAge">Increase age</button>
    <button type="button" @click="decreaseAge">Decrease age</button>
    <button type="button" @click="increaseAgeBy3">Increase age by 3</button>
    <button type="button" @click="ageChangeFn(5)">Decrease age by 5</button>
    <p>The user {{name}} is {{age}} years old</p>
    <p>Age doubled : {{ageDoubled}}</p>
</template>

<script>
export default {
    name:"User",
    props: {
        age : {type : Number, required: true, validator(value){ return value > 0; }},
        name : {type : String},
        ageChangeFn : {type: Function}
    },
    emits:['increase-age'],
    computed:{
        ageDoubled(){
            return this.age * 2;
        }
    },
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