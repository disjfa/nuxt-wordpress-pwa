import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const store = () => new Vuex.Store({
  state: {
    posts: [],
    categories: [],
  },
  actions,
  mutations,
  getters,
});

export default store;
