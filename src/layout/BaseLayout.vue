<template>
  <Layout class="base-layout">
    <BaseHeader/>
    <BaseContent/>
    <BaseFooter/>
  </Layout>
</template>

<script>
import { Layout } from "ant-design-vue";

import BaseHeader from "./BaseHeader.vue";
import BaseContent from "./BaseContent.vue";
import BaseFooter from "./BaseFooter.vue";

export default {
  name: "BaseLayout",
  components: {
    Layout,
    BaseHeader,
    BaseContent,
    BaseFooter
  }
};
</script>

<style scoped>
.base-layout {
  min-height: 100%;
}
</style>
