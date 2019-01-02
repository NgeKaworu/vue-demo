<template>
  <BaseCounter class="product-counter" positive :max="product.quantity"/>
</template>

<script>
import BaseCounter from "./BaseCounter.vue";
import { mapGetters, mapAction } from "vuex";
export default {
  components: {
    BaseCounter
  },
  props: {
    productId: Number
  }
};
</script>

<style>
</style>
