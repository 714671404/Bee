<template>
    <div class="appliction">
        <top-nav/>

        <div class="container">
            <container/>
        </div>
    </div>
</template>

<script>
    import TopNav from '~/components/TopNav'
    import Container from '~/components/Container'
    export default {
        name: "default",
        components: {
            TopNav,
            Container
        }
    }
</script>

<style scoped>

</style>