<template>
  <div class="counter-wrapper">
    <div class="counter">
      <Button
        shape="circle"
        size="small"
        icon="minus"
        @click="minus"
        v-show="show"
        :disabled="!show"
      />
      <span class="count-num" v-show="show">{{ counter }}</span>
      <div class="plus-button-wrapper">
        <Button type="primary" shape="circle" size="small" icon="plus" @click="plus"/>
      </div>
    </div>
  </div>
</template>


<script>
import { Button } from "ant-design-vue";
export default {
  components: {
    Button
  },
  props: {
    counter: Number,
    positive: Boolean
  },
  computed: {
    show() {
      return this.positive && this.counter > 0;
    }
  },
  methods: {
    plus() {
      this.$emit("onPlusClick");
    },
    minus() {
      this.$emit("onMinusClick");
    }
  }
};
</script>

<style scoped>
.counter-wrapper {
  margin: 0 8px;
  width: 70px;
  display: inline-block;
}
.counter {
  display: flex;
  justify-content: flex-end;
}
.count-num {
  width: 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
}
</style>
