<template>
  <Content>
    <Spin :spinning="loading">
      <RouterView/>
    </Spin>
  </Content>
</template>

<script>
import { Layout, Spin } from "ant-design-vue";
import { mapState } from "vuex";

const { Content } = Layout;

export default {
  name: "BaseContent",
  computed: {
    ...mapState({
      loading: state => state.global.loading
    })
  },
  components: {
    Layout,
    Content,
    Spin
  }
};
</script>

<style scoped>
</style>