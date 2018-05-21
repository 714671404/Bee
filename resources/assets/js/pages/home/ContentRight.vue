<template>
    <div class="content-right">
        <popular-tags/>

        <referral-article/>

        <top-comments/>

        <personal-information/>
    </div>
</template>

<script>
    export default {
        name: "content-right"
    }
</script>

<style scoped>
    .content-right {
        float: right;
        width: 24.3%;
    }
</style>