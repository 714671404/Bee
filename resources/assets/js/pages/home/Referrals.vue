<template>
    <div class="referrals">
        <h2 class="referrals-title">特别推举</h2>
        <div class="referrals-inner">
            <ul class="p-0 m-0">
                <li v-for="(list, index) in messages" :key="index">
                    <a :href="list.href" :alt="list.title" :title="list.title">
                        <img :src="list.img" :alt="list.title" :title="list.title"/>
                        <h3 class="inner-title">{{list.title}}</h3>
                        <p>{{list.content}}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "referrals",
        data: () => ({
            messages: [
                {
                    id: 1,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/1.jpg',
                    title: '哈佛大学用12张图，教育了10亿人_心灵鸡汤',
                    content: '很多人把感恩当成一种付出，其实感恩本身就是一种幸福。...'
                },
                {
                    id: 2,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/2.jpg',
                    title: '梳子能卖给和尚,你信吗？而所谓的营销到底是什么？',
                    content: '今天和大家分享一个营销的理念！也是我从别的渠道看到的觉得非常不错，分享给大家！ 有一个营销经理想考考他的手下，就给他们出了一道题，把梳子卖给和尚。 第一个人：出了门...'
                },
                {
                    id: 3,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/3.jpg',
                    title: '为什么男人喜欢绿茶表,这让女汉子如何活呀……',
                    content: '今天咱们来谈谈绿茶婊 绿茶婊 泛指那些外表清新脱俗， 内心工于心计的女子。 很多妹纸在后台哭诉， 为什么好男人都喜欢绿茶婊？ 她都骚的那么明显了为什么男人还觉得纯？ 男人为...'
                },
                {
                    id: 4,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/3.jpg',
                    title: '【力荐】一个北漂五年的人告诉你，为什么二十多岁的你要努力.满满的正能量',
                    content: '还有人问我，凭什么就说钱是人的胆？ 尊严大于一切!有尊严就有活着的意义!没钱也可以有尊严，你这是悖论，当你的孩子看到一样东西露出渴求的眼神，你问他想不想要，他“乖巧懂事”的回...'
                },
                {
                    id: 5,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/5.jpg',
                    title: '【力荐】年轻的时候为什么不努力就是在犯罪,接着上次的聊',
                    content: '　一个人很丑，有个很漂亮的老婆，这个人一定不简单，一是营销能力强；二是心理战术一定不错。不要去诋毁人家，多向人家学习。\n...'
                },
                {
                    id: 6,
                    href: 'javascript:void(0)',
                    img: '/images/linshi/6.jpg',
                    title: '今年我二十七八岁',
                    content: '我今年二十七八岁 不再乱买东西 月底开始算计 还了信用卡 开销多少 还剩下多少 该开始攒钱买房子了 我今年二十七八岁 偶尔会有寂寞 偶尔会挂念一个人 我今年二十七八岁 我开始追...'
                }
            ]
        })
    }
</script>

<style scoped>
    .referrals-title {
        font-size: 15px;
        font-weight: 400;
        font-family: 微软雅黑;
        padding: 6px 20px;
        margin: 0;
        border-radius: 5px 5px 0 0;
        line-height: 20px;
        background-color: #F7F7F7
    }
    .referrals-inner>ul {
        overflow: hidden;
    }
    .referrals-inner>ul>li {
        float: left;
        width: 50%;
        margin-bottom: 1px;
    }
    .referrals-inner a {
        background: white;
        color: #000000;
        overflow: hidden;
        display: block;
        padding: 5px 20px 2px 140px;
        margin-right: 1px;
    }
    .referrals-inner>ul>li>a>img {
        width: 110px;
        height: 80px;
        float: left;
        margin: 8px 0 0 -120px;
        border-radius: 5px;
    }
    .referrals-inner>ul>li>a>h3 {
        font-size: 14px;
        font-weight: 700;
        margin: 8px 0 0 10px;
        font-family: inherit;
        float: left;
        padding: 5px 0 0 0;
        overflow: hidden;
        height: 23px;
    }
    .referrals-inner>ul>li>a>p {
        color: #999;
        height: 56px;
        float: left;
        margin: 8px 0 0 10px;
        padding-bottom: 2px;
        overflow: hidden;
    }
    .referrals-inner>ul>li>a:hover {
        color: #4eae30;
        background-color: #F4FFEF;
    }
</style>