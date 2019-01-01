<template>
  <div class="detail">
    <h1>This is an detail page</h1>
    <BaseCounter :counter="num" @onPlusClick="addNum" @onMinusClick="minusNum" positive/>
  </div>
</template>

<script>
import BaseCounter from "@/components/BaseCounter";

export default {
  data: () => ({
    num: 1
  }),
  components: {
    BaseCounter
  },
  methods: {
    addNum() {
      ++this.num;
    },
    minusNum() {
      --this.num;
    }
  }
};
</script>

<style>
</style>
