<template>
    <div>
        <section class="header">
            <categories :categories="categories"></categories>
            <h1 class="page-title">{{ post.title.rendered }}</h1>
        </section>
        <section class="post-container">
            <div class="post-content">
                <h3>{{post.title.rendered}}</h3>
                <div v-html="post.content.rendered"></div>
            </div>
            <div class="sidebar">
                <recent-posts v-if="posts" :posts="posts.data"></recent-posts>
            </div>
        </section>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import axios from 'axios';
  import recentPosts from '../../components/recentPosts.vue';
  import categories from '../../components/categories.vue';

  export default {
    components: { recentPosts, categories },
    async asyncData({ params }) {
      // We can use async/await ES6 feature
      const { data } = await axios.get(`https://nuxt.craftedup.com/wp-json/wp/v2/posts?slug=${params.slug}`);
      return {
        post: data[0],
      };
    },
    head() {
      return {
        title: `Nuxt WordPress | ${this.post.title.rendered}`,
        meta: [
          {
            name: 'description',
            content: 'This is the meta description of the content.',
          },
        ],
      };
    },
    data() {
      return {
        title: 'default',
        recent: [
          {
            title: 'One',
            href: '#hash',
          },
          {
            title: 'Two',
          },
          {
            title: 'Three',
          },
        ],
      };
    },
    mounted() {
      this.$store.dispatch('getPosts');
      this.$store.dispatch('getCategories');
    },
    computed: {
      ...mapGetters([
        'posts',
        'categories',
      ]),
    },
  };
</script>

<style>
</style>
