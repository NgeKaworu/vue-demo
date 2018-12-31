<template>
    <Header class='base-header'>
      <Menu mode="horizontal">
        <Item key="home">
          <RouterLink to="/">
            <Icon type="home" />Home</RouterLink>
        </Item>
        <Item key="shoplist">
          <RouterLink to="/shoplist">
            <Icon type="bars" />Shop List
          </RouterLink>
        </Item>
        <Item key="detail">
          <RouterLink to="/detail">
            <Icon type="appstore" />Detail
          </RouterLink>
        </Item>
        <Item key="other">
          <RouterLink to="/other">
            <Icon type="ellipsis" />Other
          </RouterLink>
        </Item>
      </Menu>
    </Header>
</template>

<script>
  import {
    Layout,
    Menu,
    Icon
  } from 'ant-design-vue';
  
  
  const {
    Header
  } = Layout;
  
  const {
    Item
  } = Menu;
  
  export default {
    name: 'BaseHeader',
    components: {
      Layout,
      Header,
      Menu,
      Item,
      Icon,
    },
  }
</script>

<style scoped>
  .base-header {
    text-align: center;
    background: #fff;
  }

</style>
