<template>
    <div>
        <h1>我的订单</h1>
        <div>
            <el-card style="margin: 2vw;" v-for="item in dataList" :key="item.id">
                <div class="text-ellipsis" slot="header">
                    {{item.name}}
                </div>
                <div>
                    <div v-for="(value,key) in item">
                        <div>
                            {{key}}:{{value}}
                        </div>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    import {getOrderUser} from "../utils/HttpUtils";

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
            getOrderUser().then(res => {
                if (res.data.status === "1") {
                    this.dataList = res.data.data;
                } else {
                    this.$toast({
                        message: res.data.msg
                    });
                }
            })
        },
        methods: {}
    }
</script>

<style scoped lang="less">

</style>
