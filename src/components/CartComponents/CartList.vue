<template>
  <div>
    <Button size="small" class="clear-btn" icon="delete" @click="clearnAndClose">清空购物车</Button>
    <div class="cart-list">
      <CartItem v-for="item in items" :key="item.id" :item="item"/>
    </div>
  </div>
</template>


<script>
import CartItem from "./CartItem";
import { Button } from "ant-design-vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: {
    closeAll: Function
  },
  components: {
    CartItem,
    Button
  },
  computed: {
    ...mapGetters({
      items: "cart/cartProducts"
    })
  },
  methods: {
    ...mapMutations({
      clearnCart: "cart/clearnCart"
    }),
    clearnAndClose() {
      this.clearnCart()
      this.$emit("closeAll")
    }
  }
};
</script>

<style scoped>
.clear-btn {
  position: absolute;
  right: 30px;
}
.cart-list {
  padding-top: 24px;
}
</style>
