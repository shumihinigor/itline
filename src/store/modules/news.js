import axios from 'axios';
import router from '@/router';


// initial state
const state = () => ({
    page: 1,
    news: [],
    newsPage: {},
    count: 9,
    pageCount: 2
  });
  
  // getters
  const getters = {
    page: state => {
        return state.page;
    },
    news: state => {
        return state.news;
    },
    newsPage: state => {
        return state.newsPage;
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
    async getNews({ commit, state }) {
        await axios
            .get('/rest/news')
            .then(response => {
                commit('setNews', response.data.results);
                commit('setPageCount', Math.ceil(state.news.length / 9));
            }).catch(error => {
                router.push({ name: 'PageNotFound' });
            });
    },
    async getNewsPage({ commit, state }, id) {
        await axios
            .get(`/rest/news/${id}`)
            .then(response => {
                if (id == 'undefined') {
                    return Promise.reject();
                }
                commit('setNewsPage', response.data.object);
                let breadcrumbs = [
                    {
                        path: '/',
                        name: 'Home',
                        meta: {
                        title: "Главная"
                        }
                    },
                    {
                        path: '/news',
                        name: 'News',
                        meta: {
                            title: "Новости"
                        }
                    },
                    {
                        path: `/news/${id}`,
                        name: 'NewsPage',
                        meta: {
                            title: state.newsPage.title
                        }
                    }
                ]
                commit("changeBreadcrumbs", breadcrumbs, { root: true })
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
    setNews(state, news) {
        state.news = news;
    },
    setNewsPage(state, newsPage) {
        state.newsPage = newsPage;
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