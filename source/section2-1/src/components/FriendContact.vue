<template>
    <li>
      <h2>{{ friend.name }}</h2>
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
      </ul>
    </li>
  </template>
  
  <script>
  export default {
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
        detailsAreVisible : false
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      }
    }
  };
  </script>