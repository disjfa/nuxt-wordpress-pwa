import axios from 'axios';

const baseUrl = 'https://hapjezoetermeer.nl/wp-json/wp/v2';

export default {
  baseUrl,
  /**
   * Return a single page
   * @param  string slug Page slug (e.g. 'sample-page')
   * @return Promise Filtered response
   */
  getPage(slug) {
    return axios.get(`#{baseURL}/pages?slug=${slug}`)
      .then((response) => {
        const data = [...response.data][0];
        return {
          content: data.content.rendered,
          author: data.author,
          date: data.date,
          date_gmt: data.date_gmt,
          excerpt: data.excerpt.rendered,
          featured_media: data.featured_media,
          guid: data.guid.rendered,
          link: data.link,
          slug: data.slug,
          title: data.title.rendered,
        };
      })
      .catch(() => {
      });
  },

  /**
   * Return a single post
   * @param  string slug Post slug (e.g. 'hello-world')
   * @return Promise Filtered response
   */
  getPost(slug) {
    return new Promise((resolve, reject) => {
      axios.defaults.baseURL = this.baseUrl;
      axios.get(`posts?slug=${slug}`).then((response) => {
        const data = [...response.data][0];
        if (response.status === 200 && response.data.length > 0) {
          const filtered = {
            content: data.content.rendered,
            author: data.author,
            date: data.date,
            date_gmt: data.date_gmt,
            excerpt: data.excerpt.rendered,
            featured_media: data.featured_media,
            guid: data.guid.rendered,
            link: data.link,
            slug: data.slug,
            title: data.title.rendered,
          };
          resolve(filtered);
        } else {
          reject(response);
        }
      });
    });
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
    return new Promise((resolve) => {
      axios.defaults.baseURL = this.baseUrl;
      return axios.get('categories').then((response) => {
        const data = [...response.data];
        if (response.status === 200 && response.data.length > 0) {
          resolve(data);
        }
      });
    });
  },
};
