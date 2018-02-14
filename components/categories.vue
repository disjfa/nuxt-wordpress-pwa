<template>
    <div class="categories-menu">
        <h3>Categories</h3>
        <div v-for="category in categories">
            <nuxt-link :to="{name: 'category-slug', params: {slug: category.slug}}">{{ category.name }}</nuxt-link>
        </div>
    </div>
</template>
<script>
  export default {
    props: [
      'categories',
    ],
    methods: {
      slugToUrl(slug) {
        return `/category/${slug}`;
      },
    },
  };
</script>
