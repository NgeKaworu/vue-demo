<template>
  <Footer class="footer">
    <CartBar />
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
  width: 100%;
  bottom: 0;
  padding: 24px 12px;
  background: none;
}
</style>