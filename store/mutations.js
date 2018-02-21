import Vue from 'vue';

export default {
  PAGE: (state, page) => {
    Vue.set(state, 'page', page);
  },
  POSTS: (state, posts) => {
    Vue.set(state, 'posts', posts.data);
  },
  CATEGORIES: (state, categories) => {
    Vue.set(state, 'categories', categories.data);
  },
};
