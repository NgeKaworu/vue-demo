<template>
  <div class="shop-list">
    <h1>This is an shop-list page</h1>
  </div>
</template>


<script>
export default {
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>

<style>

</style>
