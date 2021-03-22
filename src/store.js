import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

const state = {
    activeHeader: false,
    breadcrumbs: [
        {
            name: 'Home',
            title: "Главная"
        }
    ]
};

const mutations = {
    changeActiveHeader(state, comment) {
        state.activeHeader = comment;
    },
    pushBreadcrumbs(state, comment) {
        if (state.breadcrumbs.length > 1) {
            state.breadcrumbs.pop();
        }
        state.breadcrumbs.push(comment);
    },
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
