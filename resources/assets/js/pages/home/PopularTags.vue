<template>
    <div class="popular-tags">
        <h2 class="popular-tags-title">热门标签</h2>
        <div class="popular-tags-inner">
            <ul class="p-0 m-0">
                <li v-for="list in messages"><a :href="list.href">{{list.name}}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "popular-tags",
        data: () => ({
            messages: [
                {
                    id: 1,
                    href: 'javascript:void(0)',
                    name: 'ajax'
                },
                {
                    id: 2,
                    href: 'javascript:void(0)',
                    name: 'Dreamweaver'
                },
                {
                    id: 3,
                    href: 'javascript:void(0)',
                    name: 'html'
                },
                {
                    id: 4,
                    href: 'javascript:void(0)',
                    name: 'js'
                },
                {
                    id: 5,
                    href: 'javascript:void(0)',
                    name: 'css'
                },
                {
                    id: 6,
                    href: 'javascript:void(0)',
                    name: '搞笑'
                },
                {
                    id: 7,
                    href: 'javascript:void(0)',
                    name: '娱乐'
                },
                {
                    id: 8,
                    href: 'javascript:void(0)',
                    name: 'MySQL'
                },
                {
                    id: 9,
                    href: 'javascript:void(0)',
                    name: 'PHP'
                },
                {
                    id: 10,
                    href: 'javascript:void(0)',
                    name: 'dedeCMS'
                },
                {
                    id: 11,
                    href: 'javascript:void(0)',
                    name: 'Bee'
                },
                {
                    id: 12,
                    href: 'javascript:void(0)',
                    name: '博客'
                }
            ]
        })
    }
</script>

<style scoped>
    .popular-tags {
        box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
        margin-bottom: 9px;
    }
    .popular-tags-title {
        position: relative;
        font-size: 18px;
        font-weight: 400;
        padding: 14px 18px;
        background-color: #fbfbfb;
        border-bottom: 1px solid #eaeaea;
        border-radius: 5px 5px 0 0;
        margin-bottom: 0;
    }
    .popular-tags-inner {
        padding: 14px 16px;
        background-color: #fbfbfb;
        border-radius: 0 0 5px 5px;
    }
    .popular-tags-inner>ul {
        overflow: hidden;
    }
    .popular-tags-inner>ul>li {
        float: left;
    }
    .popular-tags-inner>ul>li>a {
        padding: 6px 11px;
        font-size: 13px;
        font-weight: 100;
        border-radius: 5px;
        margin: 2px 14px 13px 2px;
        color: #000;
        display: block;
        border: 1px solid #f1f1f1;
    }
    .popular-tags-inner>ul>li>a:hover {
        border: 1px solid #00c3b6;
        color: #4eae30;
    }
</style>