let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate() {
    console.log("beforeCreate", this.message)
  },
  created() {
    console.log("created", this.message)
  },
  beforeMount() {
    console.log("beforeMount", this.$el)
  },
  mounted() {
    console.log("mounted", this.$el)
  },
  beforeUpdate() {
    console.log("beforeUpdate")
  },
  updated() {
    console.log("updated")
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log("unmounted")
  },
});


setTimeout(() => {
  vm.mount('#app');
}, 1000);