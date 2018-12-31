<template>
  <Layout>
    <Header class='header'>
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
    <Content>
      <RouterView/>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script>
  import {
    Layout,
    Menu,
    Icon
  } from 'ant-design-vue';
  
  
  const {
    Header,
    Footer,
    Content,
  } = Layout;
  
  const {
    Item
  } = Menu;
  
  export default {
    name: 'app',
    components: {
      Layout,
      Header,
      Footer,
      Content,
      Menu,
      Item,
      Icon,
    },
  }
</script>

<style scoped>
  .header {
    text-align: center;
    background: #fff;
  }

</style>
