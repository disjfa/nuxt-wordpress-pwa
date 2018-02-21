export default {
  page: state => state.page,
  posts: state => state.posts,
  post: state => slug => state.posts.find(post => post.slug === slug),
  category: state => slug => state.categories.find(category => category.slug === slug),
  categories: state => state.categories,
};
