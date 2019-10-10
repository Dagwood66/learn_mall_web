<template>
    <div class="home">

    </div>
</template>

<script>
    import {mapState} from "vuex"

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

        },
        methods: {

        }
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
