<template>
    <div class="current-news-item">
        <h2>Loading...</h2>
        <div>
            <news-item />
        </div>
    </div>
</template>
<script>
import NewsItem from '@/components/NewsItem.vue';

export default {
  components: {
    NewsItem,
  },
};
</script>
