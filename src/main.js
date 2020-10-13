import Vue from 'vue';
import App from './components/App/index.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
