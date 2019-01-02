<template>
  <Footer class="footer">
    <CartBar/>
  </Footer>
</template>

<script>
import { Layout } from "ant-design-vue";
import CartBar from "@/components/CartComponents/CartBar";

const { Footer } = Layout;

export default {
  name: "BaseFooter",
  components: {
    Footer,
    CartBar
  }
};
</script>

<style scoped>
.footer {
  position: fixed;
  z-index: 1;
  min-width: 100%;
  bottom: 0;
  padding: 10px 30px;
  background: none;
  pointer-events: none;
}
</style>