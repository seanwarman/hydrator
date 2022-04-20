<template>
  <h1>Hi there!</h1>
  <p>The count is: {{ store.counter }}</p>
  <p>My name is: {{ store.name }}</p>
  <button @click="store.plusOne()">press me</button>
</template>
<script>
  import { defineStore } from 'pinia'

  const useStore = defineStore('storeId', {
    // arrow function recommended for full type inference
    state: () => {
      return {
        // all these properties will have their type inferred automatically
        counter: 0,
        name: 'Eduardo',
        isAdmin: true,
      }
    },
    actions: {
      plusOne() {
        this.counter++
      }
    }
  })

  export default {
    setup() {
      const store = useStore()
      return { store }
    },
  }
</script>
