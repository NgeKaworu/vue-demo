<template>
  <Content>
    <RouterView/>
  </Content>
</template>

<script>
import { Layout } from "ant-design-vue";

const { Content } = Layout;

export default {
  name: "BaseContent",
  components: {
    Layout,
    Content
  }
};
</script>

<style scoped>
</style>