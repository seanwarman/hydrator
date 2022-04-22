<template>
  <h1>Hi there!</h1>
  <p>The count is: {{ user.counter }}</p>
  <p>My name is: {{ user.name }}</p>
  <button @click="user.plusOne()">things</button>
  <User />
</template>
<script>
  import { useUser } from '../store/user.js'
  import User from './User.vue'
  export default {
    components: {
      User
    },
    setup() {
      return {
        user: useUser()
      }
    },
  }
</script>
