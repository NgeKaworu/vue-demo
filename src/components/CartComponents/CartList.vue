<template>
  <div>
    <CartItem v-for="item in items" :key="item.id" :item="item"/>
  </div>
</template>


<script>
import CartItem from "./CartItem";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    CartItem
  },
  computed: {
    ...mapGetters({
      items: "cart/cartProducts"
    })
  }
};
</script>

<style scoped>
</style>
