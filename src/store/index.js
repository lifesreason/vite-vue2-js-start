import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

const modules = [counter];
Vue.use(Vuex);

const store = new Vuex.Store({
  // 严格模式
  strict: import.meta.env.MODE !== 'production',
  modules,
});

export default store;
