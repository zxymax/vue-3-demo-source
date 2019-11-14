<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <no-vue3 />
  </div>
</template>

<script>
// @ is an alias to /src
import NoVue3 from '@/components/NoVue3.vue';

export default {
  name: 'home',
  components: {
    NoVue3,
  },
};
</script>
