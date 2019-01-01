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
        <BaseItem>
          <img slot="item-start" :src="product.img" style="width:100%; height: 100%">
        </BaseItem>
      </Col>
    </Row>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import BaseItem from "@/components/BaseItem";
import { Row, Col } from "ant-design-vue";

export default {
  components: {
    BaseItem,
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
  ucpdated() {
    console.log(this.productList);
  },
  filters: {
    addCurrencySymbol(value) {
      return "￥" + value;
    }
  }
};
</script>

<style scoped>
</style>
