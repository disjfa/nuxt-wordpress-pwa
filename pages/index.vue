<template>
    <post-list v-if="posts" :posts="posts"></post-list>
</template>

<script>
  import { mapGetters } from 'vuex';
  import postList from '../components/postList.vue';
  import recentPosts from '../components/recentPosts.vue';
  import categories from '../components/categories.vue';

  export default {
    components: {
      postList,
      categories,
      recentPosts,
    },
    head() {
      return {
        title: 'Nuxt WordPress | Home',
        meta: [
          {
            name: 'description',
            content: 'This is the meta description of the content.',
          },
        ],
      };
    },
    mounted() {
      this.$store.dispatch('getPosts');
    },
    computed: {
      ...mapGetters([
        'posts',
      ]),
    },
  };
</script>
