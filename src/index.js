
import Vue from 'vue';
import App from './App.vue'
import router from './router'
import 'less'

let element = document.createElement('div');
element.setAttribute('id','app')
document.body.appendChild(element);
new Vue({
  el: element,
  router:router,
  components: { App },
  template: '<App/>'
});
