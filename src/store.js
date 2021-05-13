import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

const state = {
    activeHeader: false,
    breadcrumbs: [
        {
            path: '/',
            name: 'Home',
            meta: {
                title: 'Главная',
                breadcrumb: 'Главная'
            }
        }
    ]
};

const mutations = {
    changeActiveHeader(state, comment) {
        state.activeHeader = comment;
    },
    pushBreadcrumbs(state, comment) {
        state.breadcrumbs.push(comment);
    },
    spliceBreadcrumbs(state, comment) {
        console.log(comment);
        state.breadcrumbs = state.breadcrumbs.splice(comment);
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
