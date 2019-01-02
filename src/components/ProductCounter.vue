<template>
  <BaseCounter
    @onPlusClick="changeProduct({ id: productId, quantity: 1 })"
    @onMinusClick="changeProduct({ id: productId, quantity: -1 })"
    :counter="quantity(productId)"
    positive
    :max="inventory(productId)"
  />
</template>

<script>
import BaseCounter from "./BaseCounter.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    BaseCounter
  },
  computed: {
    ...mapGetters({
      inventory: "products/getInventoryById",
      quantity: "cart/getQuantityById"
    })
  },
  methods: {
    ...mapActions({
      changeProduct: "cart/changeQuantityById"
    })
  },
  props: {
    productId: Number
  },
  created() {
  }
};
</script>

<style>
</style>
