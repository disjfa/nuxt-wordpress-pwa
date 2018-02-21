<template>
    <main>
        <div v-if="post">
            <h1>{{ post.title.rendered }}</h1>
            <div v-html="post.content.rendered"></div>
            {{ post }}
        </div>
    </main>
</template>
<script>
  export default {
    head() {
      return {
        title: 'Nuxt WordPress',
        meta: [
          {
            name: 'description',
            content: 'This is the meta description of the content.',
          },
        ],
      };
    },
    mounted() {
      this.$store.dispatch('getPost', this.$route.params.slug);
    },
    computed: {
      post() {
        return this.$store.getters.post(this.$route.params.slug);
      },
    },
  };
</script>
