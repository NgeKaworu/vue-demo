<template>
  <Header class="base-header">
    <Menu :selectedKeys="current" mode="horizontal">
      <Item key="homepage">
        <RouterLink to="/">
          <Icon type="home"/>Home
        </RouterLink>
      </Item>
      <Item key="productpage">
        <RouterLink to="/product">
          <Icon type="bars"/>Product List
        </RouterLink>
      </Item>
      <SubMenu>
        <span slot="title" key="chart">
          <Icon type="code"/>Chart
        </span>
        <ItemGroup title="d3练习">
          <Item key="d3histogram">
            <RouterLink to="/d3/histogram">
              <Icon type="bar-chart"/>Histogram
            </RouterLink>
          </Item>
          <Item key="pie">
            <RouterLink to="/d3/pie">
              <Icon type="pie-chart"/>Pie
            </RouterLink>
          </Item>
          <Item key="force">
            <RouterLink to="/d3/force">
              <Icon type="dot-chart"/>Force
            </RouterLink>
          </Item>
          <Item key="chord">
            <RouterLink to="/d3/chord">
              <Icon type="area-chart"/>Chord
            </RouterLink>
          </Item>
          <Item key="hierarchy">
            <RouterLink to="/d3/hierarchy">
              <Icon type="stock"/>Hierarchy
            </RouterLink>
          </Item>
          <Item key="enclosure">
            <RouterLink to="/d3/enclosure">
              <Icon type="dot-chart"/>Enclosure
            </RouterLink>
          </Item>
        </ItemGroup>
      </SubMenu>
      <SubMenu>
        <span slot="title" key="other">
          <!-- <RouterLink to="/other"> -->
          <Icon type="ellipsis"/>Other
          <!-- </RouterLink> -->
        </span>
        <ItemGroup title="其他demo">
          <Item key="helloworld">
            <RouterLink to="/other/helloworld">
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
      <Item key="react">
        <a href="http://furan.xyz/react">
          <Icon type="export"/>React demos
        </a>
      </Item>
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