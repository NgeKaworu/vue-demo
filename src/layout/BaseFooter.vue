<template>
  <Footer class="footer">Footer</Footer>
</template>

<script>
import { Layout } from "ant-design-vue";

const { Footer } = Layout;

export default {
  name: "BaseFooter",
  components: {
    Footer
  }
};
</script>

<style scoped>
.footer{
  position: fixed;
  z-index: 1;
  width: 100%;
  bottom: 0;
}
</style>