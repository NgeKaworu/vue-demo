import products from "@/api/products";

// initial state
const state = {
  all: [],
  loading: false
};

// getters
const getters = {};

// actions
const actions = {
  async getAllProducts({ commit }) {
    commit("startLoading");
    const { data } = await products.fetch();
    commit("setProducts", data.data);
    commit("stopLoading");
  }
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
  },

  startLoading(state) {
    state.loading = true;
  },

  stopLoading(state) {
    state.loading = false;
  },

  decrementProductInventory(state, { id, nums = 1 }) {
    const product = state.all.find(product => product.id === id);
    product.inventory -= nums;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
