<template>
    <div>
        <div v-for="post in posts">
            <h3>
                <nuxt-link :to="slugToUrl(post.slug)">{{ post.title.rendered }}</nuxt-link>
            </h3>
            <div v-html="post.excerpt.rendered"></div>
            <strong class="more">
                <nuxt-link :to="slugToUrl(post.slug)">read more</nuxt-link>
            </strong>
        </div>
    </div>
</template>

<script>
  export default {
    props: [
      'posts',
    ],
    methods: {
      slugToUrl(slug) {
        return `/${slug}`;
      },
    },
  };
</script>

<style>
</style>
