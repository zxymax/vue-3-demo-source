import Vue from 'vue';
import Vuex from 'vuex';
import types from './types';

Vue.use(Vuex);

const BASE_URL = 'https://api.hackernews.io';

export default new Vuex.Store({
  state: {
    loading: false,
    newsItems: [],
    currentNewsItem: {},
  },
  getters: {
    loading: state => state.loading,
    newsItems: state => state.newsItems,
    currentNewsItem: state => state.currentNewsItem,
  },
  mutations: {
    [types.SET_LOADING](state, payload) {
      state.loading = payload;
    },
    [types.SET_NEWS_ITEMS](state, payload) {
      state.newsItems = payload;
    },
    [types.SET_CURRENT_NEWS_ITEM](state, payload) {
      state.currentNewsItem = payload;
    },
    [types.SET_APPEND_NEWS_ITEMS](state, payload) {
      const IDs = {};
      state.newsItems = state.newsItems.concat(payload).filter((item) => {
        if (!IDs[item.id]) {
          IDs[item.id] = true;
          return true;
        }
        return false;
      });
    },
  },
  actions: {
    async [types.GET_NEWS_ITEMS]({ commit }, { type, page = 1 }) {
      commit(types.SET_LOADING, true);
      if (page === 1) {
        commit(types.SET_NEWS_ITEMS, []);
      }
      const response = await fetch(`${BASE_URL}/${type}?page=${page}`);
      const items = await response.json();
      setTimeout(() => {
        if (page === 1) {
          commit(types.SET_NEWS_ITEMS, items);
        } else {
          commit(types.SET_APPEND_NEWS_ITEMS, items);
        }
        commit(types.SET_LOADING, false);
      }, 1000);
    },
  },
  modules: {
  },
});
