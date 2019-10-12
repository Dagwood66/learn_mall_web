<template>
    <div>
        <div>
            <div v-for="item in dataList" :key="item.id">
                {{item}}
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
                }
            })
        },
        methods: {}
    }
</script>

<style scoped lang="less">

</style>
