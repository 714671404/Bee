<template>
    <div class="new-release">
        <h2 class="new-release-title">最新发布</h2>
        <div class="new-release-inner">
            <ul class="p-0 m-0">
                <li v-for="(list, index) in messages" :key="index">
                    <div class="new-release-inner-left">
                        <a :href="list.href" :alt="list.title" :title="list.title">
                            <img :src="list.img" :alt="list.title" :title="list.title"/>
                        </a>
                    </div>
                    <div class="new-release-inner-right">
                        <a :href="list.href">
                            <h3 class="inner-title m-0">{{list.title}}</h3>
                        </a>
                        <p class="inner-content p-0 m-0">{{list.content}}</p>
                        <p class="inner-nav p-0" v-for="l in list.nav">
                            <span><i class="ico icon-user"></i>{{l.name}}</span>
                            <span><i class="ico icon-time"></i>{{l.time}}</span>
                            <span><i class="ico icon-eye-open"></i>{{l.previewTimes}}</span>
                            <span>{{l.thisBlog}}<a :href="l.href">{{l.blogName}}</a></span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "new-release",
        data: () => ({
            messages: [
                {
                    id: 1,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/1.png',
                    title: 'vue+echarts 动态绘制图表以及异步加载数据',
                    content: '背景：vue写的后台管理，需要将表格数据绘制成图表（折线图，柱状图），图表数据都是通过接口请求回来的。...',
                    nav: [
                        {
                            name: ' 张兵 ',
                            time: ' 2017-12-06',
                            previewTimes: ' 733次浏览',
                            thisBlog: '个人博客：',
                            blogName: '[Java]',
                            href: 'javascript:void(0)'
                        }
                    ]
                },
                {
                    id: 2,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/1644464127-0-lp.jpg',
                    title: '比较完整的SEO优化方案',
                    content: '根据自己的个人经验完成了这篇文章，希望对SEOer有点帮助，高手直接跳过，请勿喷水。。。...',
                    nav: [
                        {
                            name: ' 张兵 ',
                            time: ' 2017-10-21',
                            previewTimes: ' 441次浏览',
                            thisBlog: '个人博客：',
                            blogName: '[成长]',
                            href: 'javascript:void(0)'
                        }
                    ]
                },
                {
                    id: 3,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/1-1FR6151911922.jpg',
                    title: 'Java课程第一课，安装Java环境（jdk、jre）和实现第一个Java程序',
                    content: '我（张兵）给自己规划的人生，从网络营销的专业细化到Web-前端的职业,再从前端的职业回归到Java的专业，中间的抉择、辛酸是离不开家人的支持与理解。当给自己定下确立的目标后，...',
                    nav: [
                        {
                            name: ' 张兵 ',
                            time: ' 2017-10-14',
                            previewTimes: ' 342次浏览',
                            thisBlog: '个人博客：',
                            blogName: '[Java]',
                            href: 'javascript:void(0)'
                        }
                    ]
                },
                {
                    id: 4,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/1-1F9161F413H6.jpg',
                    title: '什么是变量,数据类型有哪些？',
                    content: '什么是变量 变量就是储存数据的空间。 变量的规范命名： 1.字下美人其后数 2.不可以使用关键词 3.不可以重复定义 4.首字母小写，其后首字母大写，还要见名知意。 变量的步骤： 先声...',
                    nav: [
                        {
                            name: ' 张兵 ',
                            time: ' 2017-10-14',
                            previewTimes: ' 394次浏览',
                            thisBlog: '个人博客：',
                            blogName: '[Java]',
                            href: 'javascript:void(0)'
                        }
                    ]
                },
                {
                    id: 5,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/1-1F93009532O46.jpg',
                    title: '运算符的作用以及用法的笔记',
                    content: '运算符是用于执行程序代码运算，会针对一个以上操作数项目来进行运算。...',
                    nav: [
                        {
                            name: ' 张兵 ',
                            time: ' 2017-10-14',
                            previewTimes: ' 212次浏览',
                            thisBlog: '个人博客：',
                            blogName: '[Java]',
                            href: 'javascript:void(0)'
                        }
                    ]
                },
                {
                    id: 6,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/1-1G014151S4635.jpg',
                    title: 'Java中 为什么要使用if语句，if-else的用法',
                    content: '上一章我们学习了变量的用法和常用的数据类型：int double char String boolean等，另外也学习了一些运算符，包括算术运算符、赋值运算符以及关系运算符。...',
                    nav: [
                        {
                            name: ' 张兵 ',
                            time: ' 2017-10-14',
                            previewTimes: ' 173次浏览',
                            thisBlog: '个人博客：',
                            blogName: '[Java]',
                            href: 'javascript:void(0)'
                        }
                    ]
                },
                {
                    id: 7,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/1-1F20QT0555I.jpg',
                    title: '[详细教程]如何购买域名和虚拟服务器。',
                    content: '如何购买域名和服务器？买什么样的虚拟服务器好？对于建站的新手朋友肯定是一个困扰，那么接下来我把我自己觉得不错的主机和购买教程分享给大家，如果明白的朋友可以直接跳过...',
                    nav: [
                        {
                            name: ' 张兵 ',
                            time: ' 2017-02-08',
                            previewTimes: ' 595次浏览',
                            thisBlog: '个人博客：',
                            blogName: '[学习]',
                            href: 'javascript:void(0)'
                        }
                    ]
                },
                {
                    id: 8,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/1-16122115113S14.jpg',
                    title: 'dedecms图片集调用代码',
                    content: '重点要注意：dede:fieldname=\'imgurls\'不能二次使用，如果二次使用会自动使用下面的样式，所以大家一定要注意这一点...',
                    nav: [
                        {
                            name: ' 张兵 ',
                            time: ' 2016-12-15',
                            previewTimes: ' 599次浏览',
                            thisBlog: '个人博客：',
                            blogName: '[成长]',
                            href: 'javascript:void(0)'
                        }
                    ]
                },
                {
                    id: 9,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/defaultpic.gif',
                    title: '什么样的代码才算是好的代码？',
                    content: '1.重构页面时，什么样的代码才算是好的代码？ 这个我觉得要从三方面来做答，根底的就不说了，那些语义化，构造化，兼容性等等方面的问题。说说中级部分的： 页面的强健性：这个...',
                    nav: [
                        {
                            name: ' 张兵 ',
                            time: ' 2016-12-15',
                            previewTimes: ' 536次浏览',
                            thisBlog: '个人博客：',
                            blogName: '[HTML]',
                            href: 'javascript:void(0)'
                        }
                    ]
                },
                {
                    id: 10,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/1-1611191611125F.jpg',
                    title: '如果网站域名被劫持了应该怎么办',
                    content: '当我们做好网站后，在运营网站的过程中一定会遇到各种各样影响网站安全的问题比如说比较常见的有DDOS攻击、域名劫持.....',
                    nav: [
                        {
                            name: ' 张兵 ',
                            time: ' 2016-11-19',
                            previewTimes: ' 421次浏览',
                            thisBlog: '个人博客：',
                            blogName: '[成长]',
                            href: 'javascript:void(0)'
                        }
                    ]
                },
            ]
        })
    }
</script>

<style scoped>
    .new-release-title {
        font-size: 15px;
        font-weight: 400;
        font-family: 微软雅黑;
        padding: 6px 20px;
        margin: 0;
        border-radius: 5px 5px 0 0;
        line-height: 20px;
        background-color: #F7F7F7
    }
    .new-release-inner>ul>li {
        position: relative;
        overflow: hidden;
        background-color: #fff;
        margin-bottom: 1px;
        padding-left: 4px;
    }
    .new-release-inner-left, .new-release-inner-right {
        float: left;
    }
    .new-release-inner-left {
        width: 28%;
        padding: 15px;
    }
    .new-release-inner-left>a {
        display: block;
    }
    .new-release-inner-left>a>img {
        width: 220px;
        height: 150px;
        border-radius: 5px;
        vertical-align: middle;
    }
    .new-release-inner-right {
        width: 72%;
        padding: 15px 4px;
        overflow: hidden;
    }
    .new-release-inner-right>a>h3 {
        font-size: 16px;
        font-weight: 700;
        padding: 14px 0;
        color: #000;
        display: inline-block;
    }
    .new-release-inner-right>p, .new-release-inner-right>p>span, .new-release-inner-right>p>span>a {
        font-size: 13px;
        font-weight: 100;
        color: #999;
        margin-right: 20px;
    }
    .new-release-inner-right>.inner-nav {
        margin-top: 28px;
    }
    .new-release-inner>ul>li:hover {
        margin-left: -4px;
        padding-right: 4px;
        background-color: #fafff8;
        border-left-color: #81c53f;
    }
</style>