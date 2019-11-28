<template>
    <div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" class="list">
            <div class="item" v-for="item in dataList" :key="item.id" @click="goProductDetails(item)">
                <img :src="item.logo_url" alt="">
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
                dataList: [],
                loading: false,
                page: 0,
                pageSize: 10,
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
            loadMore() {
                this.loading = true;
                axios.get("/api/goodsList", {
                    params: {
                        page: this.page,
                        pageSize: this.pageSize,
                    }
                }).then(res => {
                    if (res.data.status === "1") {
                        this.dataList.push(...res.data.data.list);
                        this.page += 1;
                        this.loading = res.data.data.list.length !== this.pageSize;
                    }
                }, res => {
                    this.loading = false;
                })
            },
            goProductDetails(item) {
                this.$router.push({
                    path: "/productDetails",
                    query: {
                        id: item.id,
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        margin: 10px;

        .item {
            box-sizing: border-box;
            flex: 0 0 25%;

            margin: 10px;
        }
    }
</style>
