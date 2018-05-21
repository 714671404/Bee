<template>
    <div class="top-nav">
        <div class="top-nav-inner">
            <div class="logo">
                <a href=""><img src="/images/logo.png"/></a>
            </div>
            <div class="nav">
                <ul>
                    <li v-for="(list, index) in topNav" :key="index">
                        <a :href="list.href">{{list.name}}</a>
                        <div class="two-nav" v-if="list.twoNav">
                            <ul class="p-0">
                                <li v-for="two in list.twoNav"><a :href="two.href">{{two.name}}</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="select">
                <div class="select-inner">
                    <input type="text" placeholder="输入想搜索的内容"/>
                    <span class="icon-select"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "top-nav",
        data: () => ({
            topNav: [
                {
                    href: 'javascript:void(0)',
                    name: '首页',
                    twoNav: null
                },
                {
                    href: 'javascript:void(0)',
                    name: '关于',
                    twoNav: null
                },
                {
                    href: 'javascript:void(0)',
                    name: '成长',
                    twoNav: null
                },
                {
                    href: 'javascript:void(0)',
                    name: '学习',
                    twoNav: [
                        {
                            href: 'javascript:void(0)',
                            name: 'JavaScript'
                        },
                        {
                            href: 'javascript:void(0)',
                            name: 'Python'
                        },
                        {
                            href: 'javascript:void(0)',
                            name: 'C++'
                        },
                        {
                            href: 'javascript:void(0)',
                            name: 'C语言'
                        },
                        {
                            href: 'javascript:void(0)',
                            name: 'PHP'
                        },
                        {
                            href: 'javascript:void(0)',
                            name: 'HTML'
                        },
                    ]
                },
                {
                    href: 'javascript:void(0)',
                    name: '娱乐',
                    twoNav: null
                },
                {
                    href: 'javascript:void(0)',
                    name: '说说',
                    twoNav: null
                },
                {
                    href: 'javascript:void(0)',
                    name: '留言',
                    twoNav: null
                }
            ],
        }),
        computed: {

        },
        methods: {

        }
    }
</script>

<style scoped>
    .top-nav {
        position: fixed;
        top: 0;
        background-color: #222;
        z-index: 999;
        width: 100%;
        text-align: center;
    }
    .top-nav-inner {
        width: 1200px;
        min-width: 1200px;
        margin: 0 auto;
    }
    .logo {
        width: 20%;
        line-height: 56px;
        float: left;
        text-align: center;
    }
    .logo> a {
        display: block;
    }
    .nav {
        width: 60%;
        float: left;
    }
    .nav ul {
        margin: 0;
        padding: 0;
    }
    .nav>ul li {
        list-style: none;
    }
    .nav>ul>li {
        float: left;
        position: relative;
    }
    .nav>ul>li a {
        display: block;
        color: #eee;
        text-decoration: none;
    }
    .nav>ul>li>a {
        padding: 16px 35px;
        font-size: 16px;
    }
    .nav>ul>li a:hover {
        background-color: #404040;
    }
    .nav>ul>li>.two-nav {
        position: absolute;
        background-color: #404040;
        display: none;
    }
    .nav>ul>li:hover .two-nav {
        display: block
    }
    .two-nav>ul>li {
        line-height: 45px;
        font-size: 14px;
        text-align: center;
    }
    .two-nav>ul>li>a {
        display: block;
        padding: 5px 20px;
    }
    .two-nav>ul>li>a:hover {
        background-color: #56A856;
    }
    .select {
        width: 20%;
        float: left;
        padding: 14px 15px;
    }
    .select-inner {
        background-color: white;
        border-radius: 5px;
        margin: 0;
        padding: 0;
        line-height: 25px;
    }
    .select-inner>input {
        border: 0;
        outline: none;
        font-size: 12px;
        width: 177px
    }
    .select-inner>span {
        margin-bottom: -4px;
    }
</style>