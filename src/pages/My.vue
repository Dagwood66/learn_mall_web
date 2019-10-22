<template>
    <div class="my">
        <template v-if="isLogin">
            <div style="text-align: center;margin: 5vw 0;" @click="goMyUpdate">
                <el-avatar shape="circle" :size="80" :src="dataInfo.avatar_url"></el-avatar>
                <p>{{dataInfo.nickname}}</p>
                <p style="color: #999999;">{{dataInfo.phone}}</p>
            </div>
        </template>
        <template v-else>
            <div style="text-align: center;margin: 5vw 0;" @click="goLogin">
                <el-avatar shape="circle" :size="80"></el-avatar>
                <p>未登录</p>
            </div>
        </template>
        <mt-cell title="我的订单" is-link :to="{path:'/orders'}"></mt-cell>
        <mt-cell v-if="isLogin" title="退出账户" is-link @click.native="loginOut"></mt-cell>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    import {isLogin,loginOut} from "../utils/HttpUtils"
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
            isLogin().then(res => {
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
            goMyUpdate() {
                this.$router.push("/myUpdate")
            },
            loginOut() {
                loginOut().then(res => {
                    window.location.reload();
                })
            }
        }
    }
</script>

<style scoped lang="less">

</style>
