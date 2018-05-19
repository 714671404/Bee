const Welcome = () => import('~/pages/Welcome')
const Home = () => import('~/pages/Home')

export default [
    {path: '/', name: 'welcome', component: Welcome},
    {path: '/home', name: 'home', component: Home},

    {path: '*', component: Home}
]