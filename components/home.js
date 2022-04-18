export default () => ({
  data: () => ({ count: 1 }),
  template: '<button @click="count++">{{ count }}</button>',
})
