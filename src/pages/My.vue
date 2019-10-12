<template>
    <div class="my">
        <h1>我的</h1>
        <mt-button type="default" size="large" @click="goLogin">登陆</mt-button>
        <mt-button type="default" size="large" @click="goOrders">我的订单</mt-button>
    </div>
</template>

<script>
    import {mapState} from "vuex"

    export default {
        data() {
            return {
                dataList: []
            }
        },
        computed: {
            ...mapState({
                pid: state => state.pid
            })
        },
        mounted() {

        },
        methods: {
            goLogin() {
                this.$router.push("/login")
            },
            goOrders() {
                this.$router.push("/orders")
            }
        }
    }
</script>

<style scoped lang="less">

</style>
