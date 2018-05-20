<template>
    <footer class="footer">
        <div class="footer-inner">
            <ul class="p-0 m-0 bottom-nav-left">
                <li v-for="list in bottomNavLeft"><a :href="list.href">{{list.name}}</a></li>
            </ul>
            <ul class="p-0 m-0 bottom-nav-right">
                <li v-for="list in bottomNavRight"><a :href="list.href">{{list.name}}</a></li>
            </ul>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "bottom-information",
        data: () => ({
            bottomNavLeft: [
                {href: 'javascript:void(0)', name: '关于'},
                {href: 'javascript:void(0)', name: '学习'},
                {href: 'javascript:void(0)', name: '娱乐'},
                {href: 'javascript:void(0)', name: '成长'},
                {href: 'javascript:void(0)', name: 'Copyright © 2018, Coke All Rights Reserved. '},
                {href: 'javascript:void(0)', name: '京ICP备16888888号'},
                {href: 'javascript:void(0)', name: '详情'},
            ],
            bottomNavRight: [
                {href: 'javascript:void(0)', name: '站长统计'},
                {href: 'javascript:void(0)', name: '今日IP[10]'},
                {href: 'javascript:void(0)', name: '今日PV[15]'},
                {href: 'javascript:void(0)', name: '昨日IP[15]'},
                {href: 'javascript:void(0)', name: '昨日PV[15]'},
                {href: 'javascript:void(0)', name: '当前在线[1]'},
            ]
        })
    }
</script>

<style scoped>
    .footer {
        position: relative;
        background-color: #414141;
        text-shadow: 0 -1px 0 #333;
        overflow: hidden;
    }
    .footer-inner {
        width: 1200px;
        margin: 0 auto;
        padding: 15px 13px;
        overflow: hidden;
    }
    .bottom-nav-left, .bottom-nav-right {
        overflow: hidden;
    }
    .footer-inner>ul>li {
        list-style: none;
        float: left;
        margin-left: 4px;
        margin-right: 4px;
    }
    .footer-inner>ul>li>a {
        font-size: 13px;
        font-family: 微软雅黑;
        font-weight: 200;
        color: #aaa;
    }

    .bottom-nav-left {
        float: left;
    }
    .bottom-nav-right {
        float: right;
    }



    .footer-inner>ul>li>a:hover {
        color: rgb(250, 245, 245)
    }
</style>