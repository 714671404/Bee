import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'

Vue.use(Router)

const router = createRouter()

export default router

function createRouter()
{
    const router = new Router({
        mode: 'history',
        routes
    })

    router.beforeEach(beforeEach)

    return router
}

async function beforeEach(to, from, next)
{
    const components = await resolveComponents(router.getMatchedComponents(to))

    if (components.length === 0) {
        return next()
    }

    const layout = to.name === 'welcome' ? 'basic' : ''

    router.app.setLayout(layout)

    next()
}

function resolveComponents(components)
{
    return Promise.all(components.map(component => {
        return typeof component === 'function' ? component() : component
    }))
}