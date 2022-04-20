<template>
  <h1>Hi there!</h1>
  <p>The count is: {{ user.counter }}</p>
  <p>My name is: {{ user.name }}</p>
  <button @click="user.plusOne()">press me</button>
</template>
<script>
  import { useUser } from '../store/user.js'
  export default {
    setup() {
      return {
        user: useUser()
      }
    },
  }
</script>
