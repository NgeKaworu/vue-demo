<template>
  <div class="cart-bar">
    <div class="cart-btn">
      <div :class="{'checkout-bar': true, 'active': visible}">
        <Button type="primary" class="checkout-btn" :style="{border: visible || 0, padding: visible || 0 }">223</Button>
        <div class="total-price-bar">123</div>
        <Badge :count="totalQuantity">
          <Button icon="shopping-cart" size="large" shape="circle" @click="visible = !visible"/>
        </Badge>
      </div>
    </div>
    <Drawer placement="bottom" @close="onClose" :visible="false" :closable="false">
      <CartList/>
    </Drawer>
  </div>
</template>

<script>
import { Button, Drawer, Badge } from "ant-design-vue";
import BaseItem from "@/components/BaseComponents/BaseItem";
import CartList from "./CartList";
import { mapGetters } from "vuex";

import "./CartBar.less";
export default {
  data: () => ({
    visible: false
  }),
  computed: {
    ...mapGetters({
      totalQuantity: "cart/getTotalQuantity"
    })
  },

  components: {
    BaseItem,
    Button,
    Drawer,
    Badge,
    CartList
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    }
  }
};
</script>

<style lang="less" scoped>
.cart-bar {
  border-radius: 20px;
  pointer-events: auto;
  min-width: 320px;
}
.cart-btn,
.checkout-bar {
  display: flex;
  justify-content: flex-end;
}
.checkout-bar {
  background-color: rgba(255, 255, 255, 0);
  border-radius: 20px;
  width: 0px;
  transition: all 0.5s;
}
.active {
  width: 320px;
  background: #fff;
}
.checkout-btn,
.total-price-bar {
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
}
.checkout-btn {
  width: 100px;
  border-radius: 0;
  border-top-left-radius: 20px 20px;
  border-bottom-left-radius: 20px 20px;
  height:100%
}
.total-price-bar {
  width: 180px;
}
</style>
