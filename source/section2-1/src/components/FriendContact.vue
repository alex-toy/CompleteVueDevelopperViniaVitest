<template>
    <li>
      <h2>Name : {{ friend.name }}</h2>
      <button @click="setDetails">Set Client</button>
      <div>
        <a :href="url">Link</a>
      </div>
      <button @click="toggleDetails">Show Details</button>
      <ul v-if="detailsAreVisible">
        <h3>MiddleName : {{ fullName() }}</h3>
        <li>
          <strong>Phone:</strong> {{ friend.phone }}
        </li>
        <li>
            <strong>Email:</strong>
            {{ friend.email }}
        </li>
        <div>
            <label for="">First Name</label><input type="text" v-model.lazy="newName">
            <p>{{ newName }}</p>
        </div>
        <div>
            <label for="">Middle Name</label><input type="text" @keyup.enter="updateMiddleName">
            <p>{{ middleName }}</p>
        </div>
        <div>
            <label for="">Last Name</label><input type="text" @input="updateLastName">
            <p>{{ lastName }}</p>
        </div>
        <div>
            <label for="">Phone</label><input type="text" v-model="newPhone">
            <p>{{ newPhone }}</p>
        </div>
        <div>
          <h3>Age : {{ age }} {{ typeof(age) }}</h3>
          <div>
              <button type="button" @click="age++">Increment</button>
              <button type="button" @click.ctrl="age--">Decrement wirt ctrl</button>
          </div>
          <div>
              <input type="number" v-model.number="age">
          </div>
        </div>
        <div>
          <button @click="setDetails">Apply</button>
        </div>
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
          age: {type: Number},
          phone: {type: String},
          email: {type: String},
        },
    },
    data() {
      return {
        detailsAreVisible : false,
        newName: "",
        lastName: "",
        age : 0,
        middleName: "",
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
      },
      fullName(){
        return `${this.friend.name} ${this.middleName} ${this.lastName}`;
      },
      updateMiddleName(event){
        this.middleName = event.target.value;
      }
    },
    inject : ['setClient']
  };
  </script>