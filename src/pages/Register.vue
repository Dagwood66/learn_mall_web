<template>
    <div>
        <h1>注册</h1>
        <mt-field label="手机号" placeholder="手机号" v-model="phone"></mt-field>
        <mt-field label="密码" placeholder="密码" type="password" v-model="pwd"></mt-field>
        <mt-field label="确认密码" placeholder="确认密码" type="password" v-model="okPwd"></mt-field>
        <div style="margin: 4vw;">
            <mt-button style="margin-bottom: 2vw;" type="primary" size="large" @click="register">注册</mt-button>
            <mt-button type="default" size="large" @click="goLogin">登陆</mt-button>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    import axios from "axios"

    export default {
        data() {
            return {
                phone: "",
                pwd: "",
                okPwd: "",
            }
        },
        computed: {
            ...mapState({})
        },
        mounted() {

        },
        methods: {
            register() {
                if (this.pwd !== this.okPwd) {
                    this.$toast({
                        message: "密码不一致"
                    });
                    return;
                }
                axios.post("/api/register", {
                    phone: this.phone,
                    pwd: this.pwd,
                }).then(res => {
                    if (res.data.status === "1") {
                        this.$router.push("/login");
                    } else {
                        this.$toast({
                            message: res.data.msg
                        });
                    }
                })
            },
            goLogin() {
                this.$router.push("/login");
            }
        }
    }
</script>

<style scoped lang="less">

</style>
