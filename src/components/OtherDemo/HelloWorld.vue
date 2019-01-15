<template>
  <div class="hello">
    <img alt="Vue logo" src="@/assets/logo.png">
    <h1>{{ myMessage }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br>check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <Button type="primary" @click="asyncTest">Antd-Vue Button</Button>
  </div>
</template>

<script>
import axios from "axios";
import { Button } from "ant-design-vue";

export default {
  name: "HelloWorld",
  props: {
    myMessage: String
  },
  components: {
    Button
  },
  methods: {
    async asyncTest() {
      try {
        const response = await axios.get("/mock_product");
      } catch (error) {
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
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