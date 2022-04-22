import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
  state: () => {
    return {
      counter: 0,
      name: 'Shuxt',
      isAdmin: true,
    }
  },
  actions: {
    plusOne() {
      this.counter++
    }
  }
})


