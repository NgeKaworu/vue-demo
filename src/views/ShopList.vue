<template>
  <div class="shop-list">
    <h1>This is an shop-list page</h1>
    <div v-for="product in productList" :key="product.id">
      <div>{{ product.id }}</div>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      productList: state => state.products.productList
    })
  },
  created() {
    this.$store.dispatch("products/getAllProducts");
  }
};
</script>

<style>
</style>
