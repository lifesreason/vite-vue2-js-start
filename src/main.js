import Vue from 'vue';
import { renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';
import App from './App.vue';
import store from './store';
import router from './router';

import '@/style/index.less';
import '@/assets/main.css';
import { isQiankun } from './utils/env';

let instance = null;
function render(props = {}) {
  // container 是 qiankun 包装过的微应用容器
  // eslint-disable-next-line no-unused-vars
  const { container, onGlobalStateChange, setGlobalState, customProps } = props;
  // console.log("自定义的props参数", customProps);
  Vue.prototype.$actions = {
    onGlobalStateChange,
    setGlobalState,
  };
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

renderWithQiankun({
  mount(props) {
    console.log('mount');
    render(props);
  },
  bootstrap() {
    console.log('bootstrap');
  },
  unmount() {
    console.log('unmount');
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
  },
});

if (!isQiankun()) {
  render({});
}
