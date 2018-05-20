<template>
    <div class="content-inner">
        <home-carousel/>

        <div class="p-0 m-0 content-in">
            <content-left/>

            <content-right/>
        </div>
    </div>
</template>

<script>
    import './index'
    export default {
        name: "home",
    }
</script>
<style scoped>
    .content-inner {
        width: 1200px;
        margin: 0 auto;
        padding-top: 56px;
        padding-bottom: 15px;
    }
    .content-in {
        overflow: hidden;
        border-radius: 5px;
    }
</style>