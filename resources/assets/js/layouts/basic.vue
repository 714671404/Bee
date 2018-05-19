<template>
    <div class="ball"></div>
</template>

<script>
    export default {
        name: "basic",
        created()
        {
            setTimeout(() => {
                this.$router.push('/home')
            }, 1800)
        }
    }
</script>

<style scoped>
    @keyframes bounce {
        60%, 80%, to {
            transform: translateY(400px);
            animation-timing-function: ease;
        }
        70% { transform: translateY(300px); }
        90% { transform: translateY(360px); }
    }

    .ball {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: auto;
        background: rgba(0,100,100,0.5);
        animation: bounce 2s cubic-bezier(.58,.13,.94,.64) forwards;
    }
</style>