import products from "@/api/products";

// initial state
const state = {
  productList: []
};

// getters
const getters = {};

// actions
const actions = {
  async getAllProducts({ commit }) {
    const { data } = await products.fetch();
    commit("setProducts", data.data);
  }
};

// mutations
const mutations = {
  setProducts(state, productList) {
    state.productList = productList;
  },

  changeProductInventory(state, { id, nums = 1 }) {
    const product = state.productList.find(product => product.id === id);
    product.inventory += nums;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
