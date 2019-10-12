<template>
    <div class="home">
        <div>
            <div v-for="item in dataList" :key="item.id">
                <span>{{item.name}}</span>
                <span>￥{{item.price}}</span>
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
        methods: {}
    }
</script>

<style scoped lang="less">
    .home {
        margin: 10px auto;
        width: 90vw;

        a.item {
            display: block;
            margin-bottom: 10px;
            border-radius: 10px;

            overflow: hidden;
        }
    }
</style>
