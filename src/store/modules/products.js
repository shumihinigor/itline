import axios from 'axios';
import router from '@/router';

import StickySidebar from "../../../node_modules/sticky-sidebar-v2/dist/sticky-sidebar"


// initial state
const state = () => ({
    selectedProduct: {},
    selectedIndex: null,

    products: [],
    product: [],

    sidebar: null,
    loadingOnChange: false,
    categories: [],
    categoriesProducts: [],
    category: {},
    title: "",
    content: "",
    description: ""
  });
  
  // getters
  const getters = {
    selectedProduct: state => {
        return state.selectedProduct;
    },
    selectedIndex: state => {
        return state.selectedIndex;
    },

    products: state => {
        return state.products;
    },
    product: state => {
        return state.product;
    },

    sidebar: state => {
        return state.sidebar;
    },
    loadingOnChange: state => {
        return state.loadingOnChange;
    },
    categories: state => {
        return state.categories;
    },
    category: state => {
        return state.category;
    },
    categoriesProducts: state => {
        return state.categoriesProducts;
    },
    title: state => {
        return state.title;
    },
    content: state => {
        return state.content;
    },
    description: state => {
        return state.description;
    },
  };
  
  // actions
  const actions = {
    selectProduct({ commit, state }, { product, index }) {
        if (window.innerWidth > 991) {
            if (state.selectedProduct.id == product.id) {
                commit('setSelectedProduct', {});
                commit('setSelectedIndex', null);
            } else {
                commit('setSelectedProduct', product);
                commit('setSelectedIndex', index);
            }
        } else {
            commit('setSelectedProduct', {});
            commit('setSelectedIndex', null);
        }
    },

    async getProducts({ commit, state }, id) {
        await axios
            .get('/rest/products')
            .then(response => {
                commit('setProducts', response.data.results);
                commit('setProduct', state.products.find(item => item.alias == id));
            }).catch(error => {
                router.push({ name: 'PageNotFound' }); 
            });
    },

    async changeList({ commit, state, dispatch }, { id, category_id }) {
        commit('setLoadingOnChange', true);
        commit('setCategories', []);
        commit('setTitle', "");
        commit('setContent', "");
        commit('setDescription', "");

        await dispatch('getCategories', { id: id, category_id: category_id });
        commit('setProduct', state.products.find(item => item.alias == id));

        commit('setTitle', state.product.name);
        commit('setLoadingOnChange', false);

        if (state.sidebar) {
            state.sidebar.destroy();
            commit('setSidebar', null);
        }
        dispatch('initSidebar', null);
    },
    async changePage({ commit, state, dispatch }, { id, category_id }) {
        commit('setLoadingOnChange', true);
        commit('setCategoriesProducts', []);
        commit('setTitle', "");
        commit('setContent', "");
        commit('setDescription', "");
        
        await dispatch('getCategoriesProducts', category_id);
        commit('setCategory', state.categories.find(item => item.alias == category_id));

        commit('setTitle', state.category.title);
        commit('setContent', state.category.text);
        commit('setDescription', state.category.short_description);
        commit('setLoadingOnChange', false);

        if (state.sidebar) {
            state.sidebar.destroy();
            commit('setSidebar', null);
        }
        dispatch('initSidebar', null);
    },
    initSidebar({ commit, state }) {
        if (window.innerWidth > 991) {
            setTimeout(() => {
                commit('setSidebar', new StickySidebar('.sidebar', {
                    topSpacing: 92,
                    bottomSpacing: 0,
                    containerSelector: '.main-content'
                }));
            }, 0);
        }
    },
    async getCategories({ commit, state }, { id, category_id }) {
        await axios
            .get(`/rest/products/${id}`)
            .then(response => {
                if (id == 'undefined') {
                    return Promise.reject();
                }
                commit('setCategories', response.data.results);
                commit('setCategory', state.categories.find(item => item.alias == category_id));
            });
    },
    async getCategoriesProducts({ commit, state }, id) {
        await axios
            .get(`/rest/products/${id}`)
            .then(response => {
                if (id == 'undefined') {
                    return Promise.reject();
                }
                commit('setCategoriesProducts', response.data.results);
            });
    },
    async getDataList({ commit, state, dispatch }, { id, category_id }) {
        await Promise.all([dispatch('getProducts', id), dispatch('getCategories', { id: id, category_id: category_id })])
            .then(() => {
                commit('setTitle', state.product.name);
                dispatch('initSidebar', null);
            })
            .catch(({ response }) => {
                router.push({ name: 'PageNotFound' });
            });
    },
    async getDataPage({ commit, state, dispatch }, { id, category_id }) {
        await Promise.all([dispatch('getProducts', id), dispatch('getCategories', { id: id, category_id: category_id }), dispatch('getCategoriesProducts', category_id)])
            .then(() => {
                commit('setTitle', state.category.title);
                commit('setContent', state.category.text);
                commit('setDescription', state.category.short_description);
                dispatch('initSidebar', null);
            })
            .catch(({ response }) => {
                router.push({ name: 'PageNotFound' });
            });
    }
  };
  
  // mutations
  const mutations = {
    setSelectedProduct(state, selectedProduct) {
        state.selectedProduct = selectedProduct;
    },
    setSelectedIndex(state, selectedIndex) {
        state.selectedIndex = selectedIndex;
    },

    setProducts(state, products) {
        state.products = products;
    },
    setProduct(state, product) {
        state.product = product;
    },
    
    setSidebar(state, sidebar) {
        state.sidebar = sidebar;
    },
    setLoadingOnChange(state, loadingOnChange) {
        state.loadingOnChange = loadingOnChange;
    },
    setCategories(state, categories) {
        state.categories = categories;
    },
    setCategory(state, category) {
        state.category = category;
    },
    setCategoriesProducts(state, categoriesProducts) {
        state.categoriesProducts = categoriesProducts;
    },
    setTitle(state, title) {
        state.title = title;
    },
    setContent(state, content) {
        state.content = content;
    },
    setDescription(state, description) {
        state.description = description;
    },
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };