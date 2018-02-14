import api from '../api/index';

export const getPage = ({ commit }, slug) => new Promise((resolve, reject) => {
  api.getPage(slug).then(
    (response) => {
      commit('PAGE', response);
      resolve(response);
    },
    (response) => {
      reject(response);
    },
  );
});

export const getPost = ({ commit }, slug) => new Promise((resolve, reject) => {
  api.getPost(slug).then(
    (response) => {
      commit('POST', response);
      resolve(response);
    },
    (response) => {
      reject(response);
    },
  );
});

export const getPosts = ({ commit }, data) =>
  api.getPosts(data)
    .then((response) => {
      commit('POSTS', response);
    });

export const getCategory = ({ commit }, slug) =>
  api.getCategory(slug)
    .then((response) => {
      commit('CATEGORY', response);
    });


export const getCategories = ({ commit }, slug) => new Promise((resolve, reject) => {
  api.getCategories(slug).then(
    (response) => {
      commit('CATEGORIES', response);
      resolve(response);
    },
    (response) => {
      reject(response);
    },
  );
});
