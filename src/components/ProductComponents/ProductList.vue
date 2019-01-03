<template>
  <Row justify="center">
    <Col
      :xs="24"
      :sm="12"
      :md="8"
      v-for="product in productList"
      :key="product.id"
      style="text-align: center"
    >
      <ProductItem :product="product"/>
    </Col>
    <Spin :spinning="loading"/>
  </Row>
</template>


<script>
import ProductItem from "./ProductItem";
import { mapState, mapActions } from "vuex";
import { Row, Col, Spin } from "ant-design-vue";

export default {
  components: {
    ProductItem,
    Row,
    Col,
    Spin
  },
  computed: {
    ...mapState({
      productList: state => state.products.productList,
      loading: state => state.global.loading
    })
  },
  created() {
    this.$store.dispatch("products/getAllProducts");
  }
};
</script>

<style scoped>
</style>
