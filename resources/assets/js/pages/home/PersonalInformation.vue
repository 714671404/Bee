<template>
    <div class="personal-information">
        <div class="personal-information-inner">
            <h2 class="personal-information-title">分享</h2>
            <p>本站运行: <span>{{existenceTime}}</span>天</p>
            <p>本月更新: <span>{{updateAction}}</span>篇</p>
            <p>共有文章: <span>{{countAction}}</span>篇</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "personal-information",
        data: () => ({
            existenceTime: 0,
            updateAction: 0,
            countAction: 0
        })
    }
</script>

<style scoped>
    .personal-information {
        box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    }
    .personal-information-inner {
        background-color: #fbfbfb;
        border-radius: 0 0 5px 5px;
        padding-bottom: 10px;
    }
    .personal-information-title {
        background-color: #5CB85C;
        padding: 6px 16px;
        color: #fff;
        display: inline-block;
        font-size: 15px;
        font-weight: 200;
        border-radius: 5px 0 6px 0;
    }
    .personal-information-inner>p {
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        line-height: 30px;
        color: #555;
        font-family: "Microsoft Yahei", "Helvetica Neue", Helvetica, Arial, sans-serif;
        letter-spacing: 2px;
    }
    .personal-information-inner>p>span {
        color: red;
        font-size: 16px;
    }
</style>