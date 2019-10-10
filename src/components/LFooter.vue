<template>
    <div class="tabbar_fill">
        <mt-tabbar v-model="selected">
            <mt-tab-item id="/" @click.native="go('/')">
                <span class="ecard-font" slot="icon">&#xe600;</span>
                首页
            </mt-tab-item>
            <mt-tab-item id="/my" @click.native="go('/my')">
                <span class="ecard-font" slot="icon">&#xe601;</span>
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    import {mapState} from "vuex"

    export default {
        name: "LFooter",
        data() {
            return {
                selected: "/",
                routerList: [
                    "/",
                    "/my"
                ]
            }
        },
        computed: {
            ...mapState({
                pid: state => state.pid
            })
        },
        watch: {
            "$route": function () { // 监听url变化
                if (this.routerList.includes(this.$route.path)) {
                    this.selected = this.$route.path;
                }
            }
        },
        methods: {
            go(url) {
                if (this.$route.path !== url) {
                    this.$router.push(url);
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .tabbar_fill {
        height: 55px;
        width: 100%;
    }

    /deep/ .mint-tabbar {
        color: #999999;
        background-color: #F7F7FA;
        background-size: 100% 0;

        .mint-tab-item {
            padding: 6px 0;
        }

        .is-selected {
            color: #039be5;
            background-color: #F7F7FA;
        }

        .mint-tab-item-icon {
            font-size: 22px;
        }

        .mint-tab-item-label {
            font-size: 14px;
        }
    }
</style>
