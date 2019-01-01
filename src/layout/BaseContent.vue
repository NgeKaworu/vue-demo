<template>
  <Content class="content">
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
.content {
  max-width: 980px;
  margin: 0 auto;
  margin-bottom: 100px;
}
</style>