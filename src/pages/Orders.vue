<template>
    <div>
        <h1>我的订单</h1>
        <div>
            <div v-for="item in dataList" :key="item.id">
                <p v-for="(value,name) in item" :key="name">
                    <span>{{item.id}}---</span><span>{{name}}&nbsp;:&nbsp;</span><span>{{value}}</span>
                </p>
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
            axios.get("/api/orders").then(res => {
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
