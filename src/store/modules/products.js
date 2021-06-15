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
    description: "",

    productPage: {},
    productPageOptionsTabs: {}
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

    productPage: state => {
        return state.productPage;
    },
    productPageOptionsTabs: state => {
        return state.productPageOptionsTabs;
    },
  };
  
  // actions
  const actions = {
    selectProduct({ commit, state }, { product, index }) {
        if (state.selectedProduct.id == product.id) {
            commit('setSelectedProduct', {});
            commit('setSelectedIndex', null);
        } else {
            commit('setSelectedProduct', product);
            commit('setSelectedIndex', index);
        }
    },
    filterProductPageOptionsTabs({ commit, state }) {
        for (const key in state.productPage.product_options) {
            if (typeof state.productPageOptionsTabs[state.productPage.product_options[key].category_name] == 'undefined' && !key.match(/lb/)) {
                state.productPageOptionsTabs[state.productPage.product_options[key].category_name] = [state.productPage.product_options[key]]
            } else if (!key.match(/lb/)) {
                state.productPageOptionsTabs[state.productPage.product_options[key].category_name].push(state.productPage.product_options[key])
            }
        }
    },

    async getProducts({ commit, state }, id) {
        await axios
            .get('/rest/products')
            .then(response => {
                commit('setProducts', response.data.results);
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

        commit('setTitle', state.product.title);
        commit('setContent', state.product.text);
        commit('setDescription', state.product.short_description);
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
        
        await dispatch('getCategoriesProducts', { category_id: category_id });

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
                commit('setCategories', response.data.results.childs);
                commit('setProduct', response.data.results.params);
            });
    },
    async getCategoriesProducts({ commit, state, dispatch }, { category_id, product_id }) {
        await axios
            .get(`/rest/products/${category_id}`)
            .then(response => {
                if (category_id == 'undefined') {
                    return Promise.reject();
                }
                commit('setProductPageOptionsTabs', {});
                commit('setCategoriesProducts', response.data.results.childs);
                commit('setCategory', response.data.results.params);
                if (product_id) {
                    response.data.results.childs.find((item) => {
                        if (item.childs && item.childs.length) {
                            return item.childs.find(child => {
                                if (child.params.alias == product_id) {
                                    commit('setProductPage', child.params)
                                    commit('setCategoriesProducts', item.childs);
                                }
                            })
                        } else if (item.params.alias == product_id) {
                            commit('setProductPage', item.params)
                        }
                    })
                    if (state.productPage.product_options && Object.keys(state.productPage.product_options).length) {
                        dispatch('filterProductPageOptionsTabs', null);
                    }
                }
            });
    },
    async getDataList({ commit, state, dispatch }, { id, category_id }) {
        await Promise.all([
            await dispatch('getProducts', id), 
            await dispatch('getCategories', { id: id, category_id: category_id })
        ])
            .then(() => {
                commit('setTitle', state.product.title);
                commit('setContent', state.product.text);
                commit('setDescription', state.product.short_description);
                dispatch('initSidebar', null);
            })
            .catch(({ response }) => {
                router.push({ name: 'PageNotFound' });
            });
    },
    async getDataPage({ commit, state, dispatch }, { id, category_id, product_id }) {
        await Promise.all([
            await dispatch('getProducts', id), 
            await dispatch('getCategories', { id: id, category_id: category_id }), 
            await dispatch('getCategoriesProducts', { category_id: category_id, product_id: product_id })
        ])
            .then(() => {
                commit('setTitle', state.category.title);
                commit('setContent', state.category.text);
                commit('setDescription', state.category.short_description);
                if (router.currentRoute.name !== 'ProductsPage') {
                    dispatch('initSidebar', null);
                }
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

    setProductPage(state, productPage) {
        state.productPage = productPage;
    },
    setProductPageOptionsTabs(state, productPageOptionsTabs) {
        state.productPageOptionsTabs = productPageOptionsTabs;
    },
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };