<template>
  <div class="product-list">
    <h1>This is an product-list page</h1>
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
    </Row>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import ProductItem from "@/components/ProductItem";
import { Row, Col } from "ant-design-vue";

export default {
  components: {
    ProductItem,
    Row,
    Col
  },
  computed: {
    ...mapState({
      productList: state => state.products.productList
    }),
    testimg(i) {
      return productList[i].img;
    }
  },
  created() {
    this.$store.dispatch("products/getAllProducts");
  },
  updated() {
    console.log(this.productList);
  },
};
</script>

<style scoped>
</style>
