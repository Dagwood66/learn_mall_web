<template>
    <div class="my">
        <h1>登陆</h1>
        <mt-field label="手机号" placeholder="手机号" v-model="phone"></mt-field>
        <mt-field label="密码" placeholder="密码" type="password" v-model="pwd"></mt-field>
        <mt-button type="default" size="large" @click="login">登陆</mt-button>
        <mt-button type="default" size="large" @click="goRegister">注册</mt-button>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    import axios from "axios"

    export default {
        data() {
            return {
                phone: "",
                pwd: ""
            }
        },
        computed: {
            ...mapState({})
        },
        mounted() {

        },
        methods: {
            login() {
                axios.post("/api/login", {
                    phone: this.phone,
                    pwd: this.pwd,
                }).then(res => {
                    if (res.data.status === "1") {
                        this.$router.push("/");
                    } else {
                        this.$toast({message: res.data.msg});
                    }
                });
            },
            goRegister() {
                this.$router.push("/register");
            },
        }
    }
</script>

<style scoped lang="less">

</style>
