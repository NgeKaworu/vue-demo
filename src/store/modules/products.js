import products from "@/api/products";

// initial state
const state = {
  productList: []
};

// getters
const getters = {
  getInventoryById: state => id =>
    state.productList.find(product => product.id === id).inventory
};

// actions
const actions = {
  // 调接口获取数据
  async getAllProducts({ commit }) {
    const { data } = await products.fetch();
    commit("setProducts", data.data);
  }
};

// mutations
const mutations = {
  // 初始化数据
  setProducts(state, productList) {
    state.productList = productList;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
