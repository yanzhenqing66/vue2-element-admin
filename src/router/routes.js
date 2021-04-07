const Login = () => import('../page/login/login.vue')
const Home = () => import('../page/home/home.vue')

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

export default routes