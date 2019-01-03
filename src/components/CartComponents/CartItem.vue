<template>
  <BaseItem class="cart-item">
    <div slot="item-start" class="cart-start">{{item.title}}</div>
    <div slot="item-mid" class="cart-mid">{{item.totalPrice | addCurrencySymbol}}</div>
    <div slot="item-end" class="cart-end">
      <CartCounter :productId="item.id"/>
    </div>
  </BaseItem>
</template>

<script>
import BaseItem from "@/components/BaseComponents/BaseItem";
import CartCounter from "@/components/CartComponents/CartCounter";
export default {
  components: {
    BaseItem,
    CartCounter
  },
  props: {
    item: Object
  },
  filters: {
    addCurrencySymbol: value => "￥" + value
  }
};
</script>

<style lang="less" scoped>
.cart-item {
  max-width: 320px;
  justify-content: space-between;
  box-shadow: 1px 1px 1px rgba(112, 112, 112, 0.2);
}
.cart-start,
.cart-mid,
.cart-end {
  padding: 5px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-start,
.cart-mid {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cart-start {
  font-weight: 1000;
}

.cart-mid {
  font-weight: 600;
  text-align: end;
}
</style>
