import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Sell from '@/components/Sell';
import Buy from '@/components/Buy';
import Interest from '@/components/Interest';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/sell',
      name: 'Sell',
      component: Sell
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/interest',
      name: 'Interest',
      component: Interest
    }
  ]
});
