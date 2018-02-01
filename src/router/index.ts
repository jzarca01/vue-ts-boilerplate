import Vue from 'vue'
import VueRouter from "vue-router";

import Hello from '../components/Hello/';
import HelloWithProps from '../components/HelloWithProps/';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test/:message',
      name: 'Hi',
      component: HelloWithProps,
      props: true
    }
  ]
})
