<template>
    <div class="comment">
        <p class="comment-title"></p>
        <p class="comment-content"></p>
        <div class="comment-reply">
            <comment v-for="(item, index) in data.comments" :key="index" :data="item" />
        </div>
    </div>
</template>
<script>
export default {
  props: ['data'],
};
</script>
