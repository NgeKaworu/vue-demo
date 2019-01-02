<template>
  <div class="cart-bar">
    <BaseItem>
      <div class="cart-btn" slot="item-end">
        <Badge :count="totalQuantity">
          <Button icon="shopping-cart" size="large" shape="circle" @click="showDrawer"/>
        </Badge>
      </div>
    </BaseItem>
    <Drawer placement="bottom" @close="onClose" :visible="visible" :closable="false">
      <CartList/>
    </Drawer>
  </div>
</template>

<script>
import { Button, Drawer, Badge } from "ant-design-vue";
import BaseItem from "@/components/BaseComponents/BaseItem";
import CartList from "./CartList";
import { mapGetters } from "vuex";

import './CartBar.less'
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

<style lange="less" scoped>
.cart-bar {
  border-radius: 20px;
  pointer-events: auto;
}
.cart-btn {
  display: flex;
  flex-direction: row-reverse;
}
</style>
