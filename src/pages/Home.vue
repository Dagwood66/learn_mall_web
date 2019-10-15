<template>
    <div>
        <div>
            <div v-for="item in dataList" :key="item.id">
                <span>{{item.name}}</span>
                <span>￥{{item.price}}</span>
                <button type="button" @click="buy(item)">购买</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    import axios from "axios"

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
            axios.get("/api/list").then(res => {
                if (res.data.status === "1") {
                    this.dataList = res.data.data;
                }
            })
        },
        methods: {
            buy(item) {
                axios.get("/api/login").then(res => {
                    if (res.data.status === "1") {
                        axios.post("/api/orders", {
                            gid: item.id,
                        }).then(res => {
                            if (res.data.status === "1") {
                                this.$router.push("/orders");
                            } else {
                                this.$toast({
                                    message: res.data.msg
                                });
                            }
                        })
                    } else {
                        this.$router.push({
                            path: "/login",
                            query: {
                                backUrl: this.$route.path
                            }
                        });
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">

</style>
