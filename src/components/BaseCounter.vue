<template>
  <div>
    <Button shape="circle" size="small" icon="minus" @click="minus"/>
    <span class="slot">
      <slot/>
    </span>
    <Button type="primary" shape="circle" size="small" icon="plus" @click="plus"/>
  </div>
</template>


<script>
import { Button } from "ant-design-vue";
export default {
  components: {
    Button
  },
  methods: {
    plus() {
      this.$emit("onPlusClick");
    },
    minus() {
      this.$emit("onMinusClick");
    }
  },
  created() {
    console.log(this);
  }
};
</script>

<style scoped>
.slot {
  display: inline-block;
  width: 24px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
}
</style>
