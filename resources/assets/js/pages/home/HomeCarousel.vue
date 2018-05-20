<template>
    <div class="banner-home">
        <transition-group tag="ul" class="p-0 m-0" name="banner-home-ul">
            <li v-for="(list, index) in banners" :key="index" v-if="index===currentIndex" @mouseenter="bannerHomeStop" @mouseleave="bannerHomeGo"><img :src="list.img" alt="个人博客"></li>
        </transition-group>
        <div class="banner-home-button">
            <span v-for="(list, index) in banners.length" @mouseover="bannerHomeChange(index)" :class="{'avatar' : index === currentIndex}"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-carousel",
        data: () => ({
            banners: [
                {img: '/images/banner/home/banner1.jpg'},
                {img: '/images/banner/home/banner2.jpg'},
                {img: '/images/banner/home/banner3.jpg'},
                {img: '/images/banner/home/banner4.jpg'},
                {img: '/images/banner/home/banner5.jpg'},
                {img: '/images/banner/home/banner5.gif'}
            ],
            currentIndex: 0,
            timer: ''
        }),
        methods: {
            autoPlay()
            {
                this.currentIndex ++
                if (this.currentIndex > this.banners.length - 1) {
                    this.currentIndex = 0
                }
            },
            bannerHomeStop()
            {
                clearInterval(this.timer)
                this.timer = null
            },
            bannerHomeGo()
            {
                this.timer = setInterval(() => {
                    this.autoPlay()
                }, 4000)
            },
            bannerHomeChange(index)
            {
                this.currentIndex = index
            }
        },
        created()
        {
            this.$nextTick(() => {
                this.timer = setInterval(() => {
                    this.autoPlay()
                }, 4000)
            })
        }
    }
</script>

<style scoped>
    .banner-home {
        padding: 0;
        margin: 15px 0;
        position: relative;
    }
    .banner-home>ul {
        width: 1200px;
        height: 350px;
        overflow: hidden;
        position: relative;
        border-radius: 5px;
    }
    .banner-home>ul>li {
        list-style: none;
        position: absolute;
    }
    .banner-home>ul>li>img {
        width: 1200px;
        height: 350px;
    }
    .banner-home-button {
        position: absolute;
        bottom: 18px;
        width: 100%;
        text-align: center
    }
    .banner-home-button>span {
        width: 10px;
        height: 10px;
        display: inline-block;
        border-radius: 50%;
        margin-left: 10px;
        cursor: pointer;
        background-color: #000;
        opacity: .2;
    }
    .banner-home-button>.avatar {
        background-color: #007aff;
    }
</style>