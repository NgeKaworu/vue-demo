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
      <Button
        type="primary"
        shape="circle"
        size="small"
        icon="plus"
        @click="plus"
        :disabled="overflow"
      />
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
    positive: Boolean,
    max: {
      type: Number,
      default: Infinity
    }
  },
  computed: {
    show() {
      return this.positive ? this.counter > 0 : true;
    },
    overflow() {
      return this.counter >= this.max;
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
.counter {
  display: flex;
  justify-content: flex-end;
}
.count-num {
  width: 2em;
  text-align: center;
  font-size: 1em;
  font-weight: 700;
}
</style>
