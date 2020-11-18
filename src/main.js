import Vue from 'vue';
// 加载element组件库
import ElementUI from 'element-ui';
// 加载element组件样式
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';

// 全局注册element组件库
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
