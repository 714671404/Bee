import Vue from 'vue'
import TopNav from '~/components/TopNav'
import BottomInformation from '~/components/BottomInformation'
import Other from '~/components/Other'

[
    TopNav,
    BottomInformation,
    Other
].forEach(Component => {
    Vue.component(Component.name, Component)
})