import Vue from 'vue'
import HomeCarousel from './HomeCarousel'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import Referrals from './Referrals'

[
    HomeCarousel,
    ContentLeft,
    ContentRight,
    Referrals
].forEach(Component => {
    Vue.component(Component.name, Component)
})