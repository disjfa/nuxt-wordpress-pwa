<template>
    <div v-if="category">
        <h1>{{ category.name }}</h1>
        <post-list v-if="posts" :posts="posts"></post-list>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import postList from '../../../components/postList.vue';
  import categories from '../../../components/categories.vue';

  export default {
    components: {
      postList,
      categories,
    },
    head() {
      return {
        title: `Nuxt WordPress | ${this.slug}`,
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
        slug: false,
      };
    },
    mounted() {
      this.slug = this.$route.params.slug;
      // this.$store.dispatch('getCategory', this.$route.params.slug)
      this.$store.dispatch('getCategories');
      this.$store.dispatch('getCategory', this.slug);
    },
    computed: {
      ...mapGetters([
        'posts',
        'category',
        'categories',
      ]),
    },
    watch: {
      category(to) {
        this.$store.dispatch('getPosts', {
          categories: [to.id],
        });
      },
    },
  };
</script>
