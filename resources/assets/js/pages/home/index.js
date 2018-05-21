import Vue from 'vue'
import HomeCarousel from './HomeCarousel'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import Referrals from './Referrals'
import NewRelease from './NewRelease'
import PopularTags from './PopularTags'

[
    HomeCarousel,
    ContentLeft,
    ContentRight,
    Referrals,
    NewRelease,
    PopularTags,
].forEach(Component => {
    Vue.component(Component.name, Component)
})