<template>
  <Header class="base-header">
    <Menu :selectedKeys="current" mode="horizontal">
      <Item key="home">
        <RouterLink to="/">
          <Icon type="home"/>Home
        </RouterLink>
      </Item>
      <Item key="productlist">
        <RouterLink to="/productlist">
          <Icon type="bars"/>Product List
        </RouterLink>
      </Item>
      <SubMenu>
        <span slot="title" key="other">
          <!-- <RouterLink to="/other"> -->
          <Icon type="ellipsis"/>Other
          <!-- </RouterLink> -->
        </span>
        <ItemGroup title="其他demo">
          <Item key="helloworld">
            <RouterLink to="/other">
              <Icon type="global"/>HelloWorld
            </RouterLink>
          </Item>
          <Item key="sudoku">
            <RouterLink to="/other/sudoku">
              <Icon type="table"/>Sudoku
            </RouterLink>
          </Item>
          <Item key="todolist">
            <RouterLink to="/other/todolist/all">
              <Icon type="ordered-list"/>todolist
            </RouterLink>
          </Item>
        </ItemGroup>
      </SubMenu>
    </Menu>
  </Header>
</template>

<script>
import { Layout, Menu, Icon } from "ant-design-vue";

const { Header } = Layout;

const { Item, SubMenu, ItemGroup } = Menu;

export default {
  name: "BaseHeader",
  data: () => ({
    current: []
  }),
  components: {
    Header,
    Menu,
    Item,
    Icon,
    SubMenu,
    ItemGroup
  },
  watch: {
    $route(to, from) {
      this.$data.current = [to.name];
    }
  }
};
</script>

<style scoped>
.base-header {
  padding: 0;
  text-align: center;
  background: #fff;
}
</style>