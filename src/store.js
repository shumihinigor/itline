import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

const state = {
    activeHeader: false,
    breadcrumbs: []
};

const mutations = {
    changeActiveHeader(state, comment) {
        state.activeHeader = comment;
    },
    changeBreadcrumbs(state, comment) {
        state.breadcrumbs = comment;
    }
};

const actions = {

};

const getters = {
    activeHeader: state => state.activeHeader,
    breadcrumbs: state => state.breadcrumbs
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
