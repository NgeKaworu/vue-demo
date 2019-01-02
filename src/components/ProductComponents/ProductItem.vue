<template>
  <BaseItem class="product-item">
    <div slot="item-start" class="product-start">
      <img :src="product.img" class="product-img">
    </div>
    <div slot="item-mid" class="product-mid">
      <div class="p-m-t">{{ product.title }}</div>
      <div class="p-m-c">{{ product.description }}</div>
      <div class="p-m-b">{{ product.price | addCurrencySymbol }}</div>
    </div>
    <div slot="item-end" class="product-end">
      <CartCounter :productId="product.id"/>
      <div class="product-inventory">{{ product.inventory | addInventory }}</div>
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
    product: Object
  },
  filters: {
    addCurrencySymbol: value => "￥" + value,
    addInventory: value => `还剩: ${value} 件`
  }
};
</script>

<style lang="less" scoped>
.product-item {
  max-width: 320px;
  justify-content: space-between;
  box-shadow: 2px 3px 3px rgba(112, 112, 112, 0.2);
}
.product-start,
.product-mid,
.product-end {
  padding: 5px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
}

.product-start {
  .product-img {
    width: 100%;
    height: 100%;
  }
}
.product-mid {
  div {
    text-align: start;
  }
}

.product-end {
  flex-direction: column-reverse;
  .product-inventory {
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
