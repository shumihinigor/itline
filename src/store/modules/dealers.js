import axios from 'axios';
import router from '@/router';


// initial state
const state = () => ({
    dealers: []
  });
  
  // getters
  const getters = {
    dealers: state => {
        return state.dealers;
    }
  };
  
  // actions
  const actions = {
    async getDealers({ commit, state }) {
        await axios
            .get('/rest/dealers/')
            .then(response => {
                commit('setDealers', response.data.results);
            }).catch(error => {
                router.push({ name: 'PageNotFound' });
            });
    }
  };
  
  // mutations
  const mutations = {
    setDealers(state, dealers) {
        state.dealers = dealers;
    }
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };