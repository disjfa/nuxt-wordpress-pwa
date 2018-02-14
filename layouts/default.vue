<template>
    <div>
        <header class="header text-center bg-dark py-3">
            <img class="logo" src="~assets/logo.svg">
            <h1 class="text-white">WordPress as a Progressive Web App</h1>
        </header>
        <div class="container py-3">
            <div class="row">
                <div class="col-lg-9 col-12">
                    <nuxt/>
                </div>
                <div class="col-lg-3 col-12">
                    <categories :categories="categories"></categories>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  import categories from '../components/categories.vue';

  export default {
    components: {
      categories,
    },
    mounted() {
      this.$store.dispatch('getCategories');
    },
    computed: {
      ...mapGetters([
        'categories',
      ]),
    },
  };
</script>
