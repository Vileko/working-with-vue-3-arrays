import { createRouter, createWebHistory} from "vue-router";



import ProductList from '@/components/pages/ProductList';
import  Basket from '@/components/pages/Basket.vue';
import Admin from '@/components/pages/Admin'


const routes = [
  {
    path: '/',
    name: 'productList',
    component: ProductList,
    props: true
  },
  {
    path: '/basket',
    name: 'basket',
    component: Basket,
    props: true
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router