<template>
    <section>
      <h2>My Friends</h2>
      <p v-html="raw_html"></p>
      <ul>
        <friend-contact v-cloak 
            v-for="friend in friends" :key="friend.id"
            @set-details="setDetails" 
            :friend="friend"
            :setClient="setClient"
        ></friend-contact>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        raw_html:"<h1>Fake Title</h1>",
        friends: [
          {
            id: "manuel",
            name: "Manuel Lorenz",
            age: 23,
            phone: "0123 45678 90",
            email: "manuel@localhost.com",
          },
          {
            id: "julie",
            name: "Julie Jones",
            age: 23,
            phone: "0987 654421 21",
            email: "julie@localhost.com",
          },
          {
            id: "seb",
            name: "seb Bourget",
            age: 23,
            phone: "654 7765 21",
            email: "seb@bourget.com",
          },
        ],
      };
    },
    methods:{
        setDetails(friendId, newName, newPhone){
            let friendToModify = this.friends.find(f => f.id === friendId);
            friendToModify.name = newName;
            friendToModify.phone = newPhone;
        },
        setClient(){
            console.log("setClient")
        }
    }
  };
  </script>


<style>
[v-cloak] {
    display: none;
}
</style>