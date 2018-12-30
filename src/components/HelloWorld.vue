<template>
  <div class="hello">
    <h1>{{ myMessage }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      <a-button type='primary'>Primary</a-button>
    </p>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
export default {
  name: 'HelloWorld',
  props: {
    myMessage: String
  },
  components:{
    AButton: Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
