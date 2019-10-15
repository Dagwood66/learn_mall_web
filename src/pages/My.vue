<template>
    <div class="my">
        <template v-if="isLogin">
            <div style="text-align: center;">
                <el-avatar :size="60" :src="dataInfo.avatar_url"></el-avatar>
                <p>{{dataInfo.phone}}</p>
            </div>
            <mt-button type="default" size="large" @click="loginOut">退出账户</mt-button>
        </template>
        <template v-else>
            <mt-button type="default" size="large" @click="goLogin">登陆</mt-button>
        </template>
        <mt-button type="default" size="large" @click="goOrders">我的订单</mt-button>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    import axios from "axios"

    export default {
        data() {
            return {
                dataInfo: {},
                isLogin: false,
            }
        },
        computed: {
            ...mapState({
                pid: state => state.pid
            })
        },
        mounted() {
            axios.get("/api/login").then(res => {
                this.isLogin = res.data.status === "1";
                if (this.isLogin) {
                    this.getDataInfo();
                }
            }, res => {
                this.isLogin = false;
            })
        },
        methods: {
            getDataInfo() {
                axios.get("/api/user").then(res => {
                    this.dataInfo = res.data.data;
                })
            },
            goLogin() {
                this.$router.push("/login")
            },
            goOrders() {
                this.$router.push("/orders")
            },
            loginOut() {
                axios.get("/api/login", {
                    params: {
                        type: "loginOut",
                    }
                }).then(res => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped lang="less">

</style>
