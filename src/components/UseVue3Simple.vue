<template>
  <div class="use-vue3">
    <h3>Use Vue3 in here</h3>
    <strong>{{msg}}</strong>
    <section>
        <form @submit.prevent="submitted">
            <input type="text" v-model="val" />
            <button>Submit</button>
        </form>
    </section>
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
</template>
<script>
import UseList from './use-vue3-simple';

export default {
  setup() {
    const {
      msg,
      val,
      lists,
      submitted,
    } = UseList();
    return {
      msg,
      val,
      lists,
      submitted,
    };
  },
};
</script>
