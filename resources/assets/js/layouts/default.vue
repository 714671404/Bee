<template>
    <div class="appliction">
        <top-nav/>

        <div class="content">
            <router-view/>
        </div>

        <bottom-information/>

        <other/>
    </div>
</template>

<script>
    export default {
        name: "default",
    }
</script>

<style scoped>
    .content {
        width: 100%;
        margin: 0 auto;
        padding: 0;
        background-color: #f1f1f1;
    }
</style>