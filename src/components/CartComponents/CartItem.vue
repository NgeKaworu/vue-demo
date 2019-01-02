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
  box-shadow: 2px 3px 3px rgba(112, 112, 112, 0.2);
}
.cart-start,
.cart-mid,
.cart-end {
  padding: 5px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}

.cart-start {
  .cart-img {
    width: 100%;
    height: 100%;
  }
}
.cart-mid {
  div {
    text-align: start;
  }
}

.cart-end {
  flex-direction: column-reverse;
  .cart-inventory {
    margin-bottom: 8px;
    text-align: end;
  }
}
.p-m-t {
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.p-m-c {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.p-m-b {
  position: absolute;
  bottom: 5px;
  color: red;
  font-weight: 500;
}
</style>
