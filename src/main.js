import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import hooks from '@u3u/vue-hooks';
import App from './App.vue';
import router from './router';
import store from './store';
import Comment from './components/Comment.vue';

Vue.use(VueCompositionApi);
Vue.use(hooks);

Vue.config.productionTip = false;

Vue.component('comment', Comment);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
