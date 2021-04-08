const Login = () => import('../page/login/login.vue')
const Home = () => import('../page/home/home.vue')
const Paper = () => import('../page/paper/paper')
const QuestionList = () => import('../page/questionList/index')

const routes = [
  {
    path: '',
    redirect: '/login',
    meta: {
      // 不显示在左侧菜单栏
      hideInMenu: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      hideInMenu: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/home/paper',
    meta: {
      title: '真题管理'
    },
    children: [
      {
        path: 'paper',
        name: 'paper',
        component: Paper,
        meta: {
          title: '试卷列表',
          access: 'paperListRead'
        }
      },
      {
        path: 'questionList',
        name: 'questionList',
        component: QuestionList,
        meta: {
          title: '试题列表',
          access: 'questionListRead'
        }
      }
    ]
  }
]

export default routes