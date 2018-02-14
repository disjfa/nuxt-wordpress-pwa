import Vue from 'vue';

export default {
  PAGE: (state, page) => {
    Vue.set(state, 'page', page);
  },
  POSTS: (state, posts) => {
    Vue.set(state, 'posts', posts.data);
  },
  POST: (state, post) => {
    Vue.set(state, 'post', post);
  },
  CATEGORY: (state, category) => {
    Vue.set(state, 'category', category.data[0]);
  },
  CATEGORIES: (state, categories) => {
    Vue.set(state, 'categories', categories);
  },
};
