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

.item-wrap {
  max-width: 320px;
  justify-content: space-between;
  box-shadow: 2px 3px 3px rgba(112, 112, 112, .2)
}

.item-start,
.item-mid,
.item-end {
  max-width: 33%;
}
</style>
