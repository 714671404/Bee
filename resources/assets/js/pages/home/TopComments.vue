<template>
    <div class="top-comments">
        <h2 class="top-comments-title">热门评论</h2>
        <div class="top-comments-inner">
            <ul class="p-0 m-0">
                <li v-for="list in messages">
                    <div class="comment-img">
                        <img :src="list.img">
                    </div>
                    <div class="comment-body">
                        <span>{{list.title}}</span>
                        <span>{{list.content}}</span>
                        <span>
                            <a :href="list.href"
                               :title="list.commentTiele"
                            >{{list.comment}}</a>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "top-comments",
        data: () => ({
            messages: [
                {
                    id: 1,
                    img: '/images/fac494264beff70ed91fedf32783552b_default_1449555763766_jpg.jpg',
                    title: '敲不出我对你的爱',
                    content: '马云讲到：有一次，我们销售人员在培训，我去看了下。发现培训老师在讲怎么样把梳子卖给和尚，我听了五分钟，我非常生气，就把这个培训老师给开除了。因为我觉得是骗子，因为和尚本来就不需要梳子。把产品卖给...',
                    comment: '评:梳子能卖给和尚,你信吗？',
                    href: 'javascript:void(0)',
                    commentTitle: '梳子能卖给和尚,你信吗？而所谓的营销到底是什么？_张兵个人博客 - 谨记自己建站的初衷,别迷失了自己！'
                },
                {
                    id: 2,
                    img: '/images/fac494264beff70ed91fedf32783552b_default_1449556072985_jpg.jpg',
                    title: '追梦魂',
                    content: '鼓掌！撒花！啪啪啪~啪啪啪~',
                    comment: '评:【本文太过激情】汉奸給日',
                    href: 'javascript:void(0)',
                    commentTitle: '【本文太过激情】汉奸給日本娘们儿洗澡_张兵个人博客 - 谨记自己建站的初衷,别迷失了自己！'
                },
                {
                    id: 3,
                    img: '/images/fac494264beff70ed91fedf32783552b_default_1449556072985_jpg.jpg',
                    title: '追梦魂',
                    content: '测试',
                    comment: '评:留言 - 給自己一个机会',
                    href: 'javascript:void(0)',
                    commentTiele: '留言 - 給自己一个机会我要让世界认识自己✿'
                },
                {
                    id: 4,
                    img: '/images/fac494264beff70ed91fedf32783552b_default_1449556072985_jpg.jpg',
                    title: '追梦魂',
                    content: '测试啊',
                    comment: '评:比较完整的SEO优化方案',
                    href: 'javascript:void(0)',
                    commentTiele: '比较完整的SEO优化方案_张兵个人博客'
                },
                {
                    id: 5,
                    img: '/images/fac494264beff70ed91fedf32783552b_default_1449556072985_jpg.jpg',
                    title: '轩泽ccccch',
                    content: '这  666666',
                    comment: '评:工作压力大? 玩点Jav',
                    href: 'javascript:void(0)',
                    commentTiele: '工作压力大? 玩点JavaScript在线小游戏缓解下吧！(仅支持PC)_张兵个人博客'
                },
            ]
        })
    }
</script>

<style scoped>
    .top-comments {
        box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
        margin-bottom: 9px;
    }
    .top-comments-title {
        position: relative;
        font-size: 18px;
        font-weight: 400;
        padding: 14px 18px;
        background-color: #fbfbfb;
        border-bottom: 1px solid #eaeaea;
        border-radius: 5px 5px 0 0;
        margin-bottom: 0;
    }
    .top-comments-inner {
        border-radius: 0 0 5px 5px;
    }
    .top-comments-inner>ul>li {
        overflow: hidden;
        background-color: #fbfbfb;
        margin-bottom: 1px;
    }
    .comment-img, .comment-body {
        float: left;
        padding: 5px 8px;
    }
    .comment-img {
        width: 23.3%;
    }
    .comment-img>img {
        width: 50px;
        height: 50px;
    }
    .comment-body {
        width: 76%;
    }
    .comment-body>span+span {
        color: #000;
        margin-top: 5px;
    }
    .comment-body>span {
        font-size: 12px;
        color: #059;
        display: block;
    }
    .comment-body>span>a {
        color: #059;
    }
</style>