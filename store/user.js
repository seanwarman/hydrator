import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
  state: () => {
    return {
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


