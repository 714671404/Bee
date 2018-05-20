const Welcome = () => import('~/pages/Welcome')
const Home = () => import('~/pages/home/Home')
const Action = () => import('~/pages/action/Action')

export default [
    {path: '/', name: 'welcome', component: Welcome},
    {path: '/home', name: 'home', component: Home},
    {path: '/action', name: 'action', component: Action},

    {path: '*', component: Home}
]