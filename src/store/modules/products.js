import products from "@/api/products";

// initial state
const state = {
  all: []
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
  setProducts(state, products) {
    state.all = products;
  },

  decrementProductInventory(state, { id }) {
    const product = state.all.find(product => product.id === id);
    product.inventory--;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
