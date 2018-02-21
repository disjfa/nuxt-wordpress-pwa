import api from '../api/index';

export default {
  getPage: ({ commit }, slug) =>
    api.getPage(slug)
      .then((response) => {
        commit('PAGE', response);
      }),
  getPost: ({ commit }, slug) =>
    api.getPost(slug)
      .then((response) => {
        commit('POSTS', response);
      }),
  getPosts: ({ commit }, data) =>
    api.getPosts(data)
      .then((response) => {
        commit('POSTS', response);
      }),
  getCategory: ({ commit }, slug) =>
    api.getCategory(slug)
      .then((response) => {
        commit('CATEGORIES', response);
      }),
  getCategories: ({ commit }, slug) =>
    api.getCategories(slug)
      .then((response) => {
        commit('CATEGORIES', response);
      }),
};
