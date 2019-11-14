<template>
    <div>
        <h1>Don't go! Article News in here </h1>
        <h6>Use vue3</h6>
        <h5>{{title}}</h5>
        <article-nav-bar />
        <div v-if="loading">
            <h3>Loading...</h3>
        </div>
        <news-item v-for="(item, index) in newsItems" :key="index" :item="item" />
    </div>
</template>
<script>
import { ref, onMounted, watch } from '@vue/composition-api';
import { useState, useActions, useRouter } from '@u3u/vue-hooks';
import ArticleNavBar from '@/components/ArticleNavBar.vue';
import NewsItem from '@/components/NewsItem.vue';

export default {
  components: {
    ArticleNavBar,
    NewsItem,
  },
  setup() {
    const route = useRouter();
    const title = ref('Welcome!');
    const { loading, newsItems } = useState(['loading', 'newsItems']);
    const { GET_NEWS_ITEMS } = useActions(['GET_NEWS_ITEMS']);
    const currentPage = ref(1);
    const setCurrentType = (type) => {
      currentPage.value = 1;
      GET_NEWS_ITEMS({
        type,
        page: currentPage.value,
      });
    };
    onMounted(() => {
    //   console.log(route.route.value.params.type);
      setCurrentType(route.route.value.params.type);
    });
    watch(() => route.route.value.params.type, (type) => {
      setCurrentType(type);
    });

    return {
      title,
      loading,
      newsItems,
      currentPage,
    };
  },
};
</script>
<style scoped>
h1, h6 {
    text-align: center;
}
</style>
