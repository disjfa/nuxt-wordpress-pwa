<template>
    <div>
        <h3>
            Recent Posts
        </h3>
        <ul>
            <li v-for="item in posts">
                <nuxt-link :to="slugToUrl(item.slug)">{{ item.title.rendered }}</nuxt-link>
            </li>
        </ul>
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
