<template>
    <div class="other">
        <transition name="page" mode="out-in">
            <button
                    v-show="toTop"
                    @click="goTop"
                    class="return-top"></button>
        </transition>
    </div>
</template>

<script>
    let stop = false
    let timer = null
    export default {
        name: "other",
        data: () => ({
            toTop: false
        }),
        mounted()
        {
            window.addEventListener('scroll', this.needToTop)
        },
        methods: {
            goTop()
            {
                clearInterval(timer);
                timer = setInterval(function() {
                    console.log('不妙');
                    let curHeight = document.documentElement.scrollTop || document.body.scrollTop;  // 得到当前高度
                    var now = curHeight;
                    var speed = (0 - now) / 7;                              // 随着高度减速
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if (curHeight === 0) {                          //当前高度为零,停止这次计时器
                        clearInterval(timer);                             // C1
                    }
                    document.documentElement.scrollTop = curHeight + speed;         //直接给高度赋值,会调用needtotop方法
                    document.body.scrollTop = curHeight + speed;                //谷歌的
                    stop = false;                               // A
                }, 30);
            },
            needToTop: function() {
                let curHeight = document.documentElement.scrollTop || document.body.scrollTop;
                let viewHeight = document.documentElement.clientHeight;
                if (curHeight > viewHeight + 100) {
                    this.toTop = true;                         //赋值是为了按钮的v-show='toTop'
                } else {
                    this.toTop = false;
                }
                if (stop) {                 //STOP
                    clearInterval(timer);             //C2
                }
                stop = true;                    //B
            }
        }
    }
</script>

<style scoped>
    .other {
        position: fixed;
        bottom: 0;
    }

    .return-top {
        background: url('/images/return-top.png') no-repeat -42px center #666;
        width: 40px;
        height: 40px;
        border: 0;
        position: fixed;
        right: 0;
        bottom: 0;
        cursor: pointer;
    }
</style>