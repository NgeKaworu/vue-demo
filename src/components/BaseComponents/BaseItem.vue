<template>
  <div class="item-wrap">
    <div class="item-start">
      <slot name="item-start" />
    </div>
    <div class="item-mid">
      <slot name="item-mid" />
    </div>
    <div class="item-end">
      <slot name="item-end" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.item-wrap,
.item-start,
.item-mid,
.item-end {
  margin: 0 auto;
  display: flex;
  flex: 1 0 auto;
}

.item-start,
.item-mid,
.item-end {
  flex-direction: column;
}

.item-start,
.item-mid,
.item-end {
  max-width: 33%;
}
</style>
