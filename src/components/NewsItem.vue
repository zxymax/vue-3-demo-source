<!-- the component of article -->
<template>
    <div class="news-item">
        <p class="news-item-title">
            <a :href="item.url">{{item.title}}</a>
            <span class="domain">{{item.domain}}</span>
        </p>
        <p class="news-item-detail">
            article in here
        </p>
    </div>
</template>
<script>
export default {
  props: ['item'],
};
</script>
<style scoped>
.news-item-title::before {
    counter-increment: news;
    content: counter(news);
    color: #828282;
}
.news-item-title a {
    text-decoration: none;
    color: initial;
}
.news-item-title .domain {
    color: #828282;
}
.news-item {
    font-size: .9em;
}
.news-item-detail {
    margin-left: 2em;
    font-size: .7em;
    color: #828282;
}
</style>
