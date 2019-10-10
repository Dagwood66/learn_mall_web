<template>
    <!--suppress HtmlUnknownAttribute -->
    <div
        id="app"
        v-loading="isLoading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)">
        <div class="main">
            <router-view></router-view>
        </div>
        <l-footer></l-footer>
    </div>
</template>

<script>
    import LFooter from "./components/LFooter";
    import {mapState} from "vuex";

    export default {
        name: 'App',
        components: {
            LFooter
        },
        computed: {
            ...mapState({
                isLoading: state => state.isLoading
            })
        },
        data() {
            return {}
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
    #app {
        height: 100vh;
        display: flex;
        flex-direction: column;

        overflow: hidden;
    }

    .main {
        flex: 1;
        overflow-y: scroll;
    }
</style>
