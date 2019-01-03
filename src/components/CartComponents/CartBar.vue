<template>
  <div class="cart-bar">
    <div class="cart-btn">
      <div
        :class="{'checkout-bar': true, 'active': showDrawer || showCheckBar}"
        @mouseleave="showCheckBar=false"
      >
        <Button
          type="primary"
          class="checkout-btn"
          :style="{border: showCheckBar || 0, padding: showCheckBar || 0 }"
        >去结算</Button>
        <div
          class="total-price-bar"
          @click="showDrawer = !showDrawer"
        >{{cartTotalPrice | addCurrencySymbol}}</div>
        <Badge :count="totalQuantity">
          <Button
            @mouseover="showCheckBar=true"
            icon="shopping-cart"
            size="large"
            shape="circle"
            @click="showDrawer = !showDrawer"
          />
        </Badge>
      </div>
    </div>
    <Drawer placement="bottom" @close="onClose" :visible="showDrawer" :closable="false">
      <CartList @closeAll="onClose"/>
    </Drawer>
  </div>
</template>

<script>
import { Button, Drawer, Badge } from "ant-design-vue";
import CartList from "./CartList";
import { mapGetters } from "vuex";

import "./CartBar.less";
export default {
  data: () => ({
    // 控制抽屉显隐
    showDrawer: false,
    // 控制结算条显隐
    showCheckBar: false
  }),
  computed: {
    ...mapGetters({
      totalQuantity: "cart/getTotalQuantity",
      cartTotalPrice: "cart/cartTotalPrice"
    })
  },

  components: {
    Button,
    Drawer,
    Badge,
    CartList
  },
  methods: {
    onClose() {
      this.showDrawer = false;
      this.showCheckBar = false;
    }
  },
  filters: {
    addCurrencySymbol: value => "￥" + value
  }
};
</script>

<style lang="less" scoped>
.cart-bar {
  border-radius: 20px;
  min-width: 320px;
}
.cart-btn,
.checkout-bar {
  display: flex;
  justify-content: flex-end;
}
.checkout-bar {
  pointer-events: auto;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: none;
  border-radius: 20px;
  width: 0px;
  transition: all 0.5s;
}
.active {
  width: 320px;
  background: #fff;
  box-shadow: 2px 3px 9px rgba(112, 112, 112, 0.2);
}
.checkout-btn,
.total-price-bar {
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
  font-weight: 1000;
}
.checkout-btn {
  width: 100px;
  border-radius: 0;
  border-top-left-radius: 20px 20px;
  border-bottom-left-radius: 20px 20px;
  height: 100%;
}
.total-price-bar {
  width: 180px;
}
</style>
