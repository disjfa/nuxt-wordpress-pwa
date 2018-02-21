import axios from 'axios';

const baseUrl = 'https://demo.wp-api.org/wp-json/wp/v2';

export default {
  baseUrl,
  /**
   * Return a single page
   * @param  string slug Page slug (e.g. 'sample-page')
   * @return Promise Filtered response
   */
  getPage(slug) {
    return axios.get(`${this.baseUrl}/pages?slug=${slug}`);
  },

  /**
   * Return a single post
   * @param  string slug Post slug (e.g. 'hello-world')
   * @return Promise Filtered response
   */
  getPost(slug) {
    return axios.get(`${this.baseUrl}/posts?slug=${slug}`);
  },
  /**
   * Return all posts (paginated)
   * @param  string slug Post slug (e.g. 'hello-world')
   * @return Promise Filtered response
   */
  getPosts() {
    return axios.get(`${this.baseUrl}/posts`);
  },
  /**
   * Returns category data and all posts under it (paginated)
   * @param  string slug Category slug (e.g. 'news')
   * @return Promise Filtered response
   */
  getCategory(slug) {
    return axios.get(`${this.baseUrl}/categories?slug=${slug}`);
  },
  getCategories() {
    return axios.get(`${this.baseUrl}/categories`);
  },
};
