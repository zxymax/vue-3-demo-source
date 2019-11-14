<template>
  <div class="no-vue-3">
    <h3>No Vue3 in here</h3>

    <div class="something">
      <h2>Search-Something</h2>
      <section>
        <form @submit.prevent="submitted">
          <input type="text" v-model="val">
          <button>Search</button>
        </form>
      </section>
      <div v-if="loading">
        Loading...
      </div>
      <div class="search-something" v-for="(item, index) in lists" :key="index">
        <ul>
          <li>
            <span class="title">ID: </span>
            <span class="brew">{{item.id}}</span>
          </li>
          <li>
            <span class="title">Name: </span>
            <span class="brew">{{item.name}}</span>
          </li>
          <li>
            <span class="title">Country: </span>
            <span class="brew">{{item.country}}</span>
          </li>
          <li>
            <span class="title">State: </span>
            <span class="brew">{{item.state}}</span>
          </li>
          <li>
            <span class="title">City: </span>
            <span class="brew">{{item.city}}</span>
          </li>
          <li>
            <span class="title">Zip: </span>
            <span class="brew"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['loading']),
  },
  data() {
    return {
      val: '',
      lists: [],
    };
  },
  methods: {
    ...mapActions(['SET_LOADING']),
    async submitted() {
      const response = await fetch(`https://api.openbrewerydb.org/breweries?by_name=${this.val}`);
      this.SET_LOADING(false);
      const json = await response.json();
      this.lists = await json;
    },
  },
};
</script>
