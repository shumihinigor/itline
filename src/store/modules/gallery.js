import axios from 'axios';
import router from '@/router';


// initial state
const state = () => ({
    page: 1,
    gallery: [],
    galleryPage: {},
    count: 8,
    pageCount: 2
  });
  
  // getters
  const getters = {
    page: state => {
        return state.page;
    },
    gallery: state => {
        return state.gallery;
    },
    galleryPage: state => {
        return state.galleryPage;
    },
    count: state => {
        return state.count;
    },
    pageCount: state => {
        return state.pageCount;
    }
  };
  
  // actions
  const actions = {
    async getGallery({ commit, state }) {
        await axios
            .get('/rest/gallery/')
            .then(response => {
                commit('setGallery', response.data.results);
                commit('setPageCount', Math.ceil(state.gallery.length / 8));
            }).catch(error => {
                router.push({ name: 'PageNotFound' });
            });
    },
    getGalleryPage({ commit, state }, id) {
        axios
            .get(`/rest/gallery/${id}`)
            .then(response => {
                commit('setGalleryPage', response.data.object);
                let breadcrumbs = [
                    {
                        path: '/',
                        name: 'Home',
                        meta: {
                            title: "Главная"
                        }
                    },
                    {
                        path: '/about',
                        name: 'About',
                        meta: {
                            title: "О компании"
                        }
                    },
                    {
                        path: `/about/gallery/${id}`,
                        name: 'GalleryPage',
                        meta: {
                            title: state.galleryPage.title
                        }
                    }
                ]
                commit("changeBreadcrumbs", breadcrumbs, { root: true });
            }).catch(error => {
                router.push({ name: 'PageNotFound' });
            });
    }
  };
  
  // mutations
  const mutations = {
    setPage(state, page) {
        state.page = page;
    },
    setGallery(state, gallery) {
        state.gallery = gallery;
    },
    setGalleryPage(state, galleryPage) {
        state.galleryPage = galleryPage;
    },
    setCount(state, count) {
        state.count = count;
    },
    setPageCount(state, pageCount) {
        state.pageCount = pageCount;
    }
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };