<template>
    <div id="app">

        <transition name="page" mode="out-in">
            <component  v-if="layout" :is="layout"/>
        </transition>
    </div>
</template>

<script>

    const requireContext = require.context('~/layouts', false, /.*\.vue$/)
    const layouts = requireContext.keys()
        .map(file =>
            [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
            )
        .reduce((components, [name, component]) => {
            components[name] = component.default || component
            return components
        }, {})

    export default {
        el: '#app',
        data: () => ({
            layout: null,
            defaultLayout: 'default'
        }),
        methods: {
            setLayout(layout)
            {
                if (!layout || !layouts[layout]) {
                    layout = this.defaultLayout
                }
                this.layout = layouts[layout]
            }
        }
    }
</script>
