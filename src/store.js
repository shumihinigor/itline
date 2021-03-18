import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

const state = {
    activeHeader: 0
};

const mutations = {
    changeActiveHeader(state, comment) {
        state.activeHeader = comment;
    },
    
};

const actions = {

};

const getters = {
    activeHeader: state => state.activeHeader
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
