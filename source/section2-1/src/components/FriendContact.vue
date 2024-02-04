<template>
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="setDetails">Set Client</button>
      <div>
        <a :href="url">Link</a>
      </div>
      <button @click="toggleDetails">Show Details</button>
      <ul v-if="detailsAreVisible">
        <li>
          <strong>Phone:</strong>
          {{ friend.phone }}

        </li>
        <li>
            <strong>Email:</strong>
            {{ friend.email }}
        </li>
        <div>
            <label for="">First Name</label><input type="text" v-model="newName">
            <p>{{ newName }}</p>
        </div>
        <div>
            <label for="">Last Name</label><input type="text" @input="updateLastName">
            <p>{{ lastName }}</p>
        </div>
        <div>
            <label for="">Phone</label><input type="text" v-model="newPhone">
            <p>{{ newPhone }}</p>
        </div>
        <button @click="setDetails">Apply</button>
      </ul>
    </li>
  </template>
  
  <script>
  export default {
    emits: ['set-details'],
    props:{
        friend: {
          id: {type: String},
          name: {type: String},
          phone: {type: String},
          email: {type: String},
        },
    },
    data() {
      return {
        detailsAreVisible : false,
        newName: "",
        lastName: "",
        newPhone: "",
        url: "http://google.com"
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      setDetails() {
        this.$emit('set-details', this.friend.id, this.newName, this.newPhone);
      },
      updateLastName(event){
        this.lastName = event.target.value;
      }
    },
    inject : ['setClient']
  };
  </script>