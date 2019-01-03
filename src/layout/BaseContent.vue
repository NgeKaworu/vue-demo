<template>
  <Content class="content">
    <KeepAlive>
      <RouterView/>
    </KeepAlive>
  </Content>
</template>

<script>
import { Layout } from "ant-design-vue";

const { Content } = Layout;

export default {
  name: "BaseContent",
  components: {
    Content
  }
};
</script>

<style scoped>
.content {
  max-width: 980px;
  margin: 0 auto;
  margin-bottom: 64px;
}
</style>