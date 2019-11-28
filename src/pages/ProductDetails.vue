<template>
    <div>
        {{gid}}
        <div>
            <el-button @click="buy()">购买</el-button>
        </div>
    </div>
</template>

<script>
    import {postOrders} from "../utils/HttpUtils";
    // TODO 商品详情
    export default {
        data() {
            return {
                gid: this.$route.query.id,
                dataInfo: {},
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData() {

            },
            buy() {
                postOrders({
                    gid: this.gid,
                }).then(res => {
                    if (res.data.status === "1") {
                        this.$router.push("/orders");
                    } else {
                        this.$toast({
                            message: res.data.msg
                        });
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">

</style>