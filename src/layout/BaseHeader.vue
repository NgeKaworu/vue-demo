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
      <SubMenu>
        <span slot="title" class="submenu-title-wrapper" key="other">
          <RouterLink to="/other">
            <Icon type="ellipsis" />Other
          </RouterLink>
        </span>
        <ItemGroup title="其他demo">
          <Item key="helloworld">
            <RouterLink to="/other">
              <Icon type="global" />HelloWorld
            </RouterLink>
          </Item>
          <Item key="sudoku">
            <RouterLink to="/other/sudoku">
              <Icon type="table" />Sudoku
            </RouterLink>
          </Item>
          <Item key="todoslist">
            <RouterLink to="/other/todoslist/all">
              <Icon type="ordered-list" />TodosList
            </RouterLink>
          </Item>
        </ItemGroup>
      </SubMenu>
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
    Item,
    SubMenu,
    ItemGroup
  } = Menu;

  export default {
    name: 'BaseHeader',
    components: {
      Layout,
      Header,
      Menu,
      Item,
      Icon,
      SubMenu,
      ItemGroup
    },
  }
</script>

<style scoped>
  .base-header {
    text-align: center;
    background: #fff;
  }
</style>