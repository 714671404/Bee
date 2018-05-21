<template>
    <div class="referral-article">
        <h2 class="referral-article-title">推举文章</h2>
        <div class="referral-article-inner">
            <ul class="m-0 p-0">
                <li v-for="list in messages">
                    <a :href="list.href" :title="list.title">
                        <span class="thumbnail">
                            <img :src="list.img" :alt="list.title">
                        </span>
                        <span class="text">{{list.title}}</span>
                        <span class="muted">{{list.time}}</span>
                        <span class="muted">{{list.select}}阅读</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "referral-article",
        data: () => ({
            messages: [
                {
                    id: 1,
                    href: 'javascript:void(0)',
                    img: '/images/1-1G206160430533.png',
                    title: 'vue+echarts 动态绘制图表以及异步加载数据',
                    time: '2017-12-06',
                    select: '741'
                },
                {
                    id: 2,
                    href: 'javascript:void(0)',
                    img: '/images/1644464127-0-lp.jpg',
                    title: '比较完整的SEO优化方案',
                    time: '2017-10-21',
                    select: '444'
                },
                {
                    id: 3,
                    href: 'javascript:void(0)',
                    img: '/images/1-1FR6151911922.jpg',
                    title: 'Java课程第一课，安装Java环境（jdk、jre）和实现第一个Java程序',
                    time: '2017-10-14',
                    select: '344'
                },
                {
                    id: 4,
                    href: 'javascript:void(0)',
                    img: '/images/1-1F9161F413H6.jpg',
                    title: '什么是变量,数据类型有哪些？',
                    time: '2017-10-14',
                    select: '402'
                },
                {
                    id: 5,
                    href: 'javascript:void(0)',
                    img: '/images/1-1F93009532O46.jpg',
                    title: '运算符的作用以及用法的笔记',
                    time: '2017-10-14',
                    select: '219'
                }
            ]
        })
    }
</script>

<style scoped>
    .referral-article {
        box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
        margin-bottom: 9px;
    }
    .referral-article-title {
        position: relative;
        font-size: 18px;
        font-weight: 400;
        padding: 14px 18px;
        background-color: #fbfbfb;
        border-bottom: 1px solid #eaeaea;
        border-radius: 5px 5px 0 0;
        margin-bottom: 0;
    }
    .referral-article-inner {
        border-radius: 0 0 5px 5px;
        background-color: #fbfbfb;
    }
    .referral-article-inner>ul>li>a {
        overflow: hidden;
        display: block;
        padding: 8px 10px;
        border-bottom: solid 1px #eee;
        font-size: 14px;
        background-color: #fbfbfbfb;
        border-radius: 0 0 5px 5px;
    }
    .referral-article-inner span {
        float: left;
    }
    .thumbnail {
        width: 30%;
        display: block;
    }
    .thumbnail>img {
        width: 80px;
        height: 55px;
        vertical-align: center;
        display: inline-block;
        border-radius: 5px;
    }
    .text {
        margin-top: -2px;
        width: 68%;
        display: block;
    }
    .muted {
        margin-right: 12px;
        margin-top: 3px;
        color: #999;
        font-size: 12px;
    }
    .referral-article-inner>ul>li>a>.text, .referral-article-inner>ul>li>a>.muted{
        padding-left: 12px;
    }
    .referral-article-inner>ul>li>a:hover {
        color: #4eae30;
        background-color: #fafff8;
    }
</style>