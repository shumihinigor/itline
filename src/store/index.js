import Vue from "vue";
import Vuex from "vuex";


// modules
import gallery from "./modules/gallery";
import news from "./modules/news";
import products from "./modules/products";
import dealers from "./modules/dealers";


Vue.use(Vuex);

const state = {
    activeHeader: false,
    breadcrumbs: [],
    seoTitle: "",
    seoDescription: ""
};

const mutations = {
    setSeoTitle(state, comment) {
        state.seoTitle = comment;
    },
    setSeoDescription(state, comment) {
        state.seoDescription = comment;
    },
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
    seoTitle: state => state.seoTitle,
    seoDescription: state => state.seoDescription,
    activeHeader: state => state.activeHeader,
    breadcrumbs: state => state.breadcrumbs
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        gallery,
        news,
        products,
        dealers
    }
});