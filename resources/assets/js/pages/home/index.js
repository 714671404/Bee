import Vue from 'vue'
import HomeCarousel from './HomeCarousel'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import Referrals from './Referrals'
import NewRelease from './NewRelease'
import PopularTags from './PopularTags'
import ReferralArticle from './ReferralArticle'
import TopComments from './TopComments'
import PersonalInformation from './PersonalInformation'

[
    HomeCarousel,
    ContentLeft,
    ContentRight,
    Referrals,
    NewRelease,
    PopularTags,
    ReferralArticle,
    TopComments,
    PersonalInformation
].forEach(Component => {
    Vue.component(Component.name, Component)
})