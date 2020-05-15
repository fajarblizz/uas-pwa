import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Area from '../views/Area.vue'
import Meals from '../views/Meals.vue'
import Category from '../views/Category.vue'
import Detail from '../components/Detail.vue'
import Cate from '../components/IsiCategory.vue'
import Search from '../components/Search.vue'
import Favorit from '../components/Favorit.vue'
import FilterArea from '../views/FilterArea.vue'
import FilterIngredient from '../views/FilterIngredient.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/area',
    name: 'Area',
    component: Area
  },
  {
    path: '/filterarea/:name',
    name: 'FilterArea',
    component: FilterArea
  },
  {
    path: '/meals',
    name: 'Meals',
    component: Meals
  },
  {
    path: '/filteringredient/:name',
    name: 'FilterIngredient',
    component: FilterIngredient
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/favorit',
    name: 'Favorit',
    component: Favorit
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/list-category/:id',
    name: 'Come',
    component: Cate
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
