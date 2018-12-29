<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld my-message="Welcome to Your Vue.js App"  />
    <TodosList v-on:event-test="onEventTest" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodosList from './components/todosList/TodosList.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TodosList
  },
  methods:{
    onEventTest: function (event) {
      console.log('子组件回调', event)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
