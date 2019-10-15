<template>
    <div>
        <div style="text-align: center;">
            <el-upload action="/api/uploadFile" :show-file-list="false" :on-success="handleAvatarSuccess">
                <img class="avatar" v-if="dataInfo.avatar_url" :src="dataInfo.avatar_url" alt="">
                <i class="el-icon-plus avatar-uploader-icon" v-else></i>
            </el-upload>
        </div>
        <mt-field label="昵称" placeholder="请输入昵称" v-model="dataInfo.nickname"></mt-field>
        <div style="margin: 5vw 4vw 0;">
            <mt-button type="primary" size="large" @click="saveUser">保存</mt-button>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    import axios from "axios"

    export default {
        data() {
            return {
                dataInfo: {
                    nickname: ""
                },
                isLogin: false,
            }
        },
        computed: {
            ...mapState({
                pid: state => state.pid
            })
        },
        mounted() {
            this.getDataInfo();
        },
        methods: {
            getDataInfo() {
                axios.get("/api/user").then(res => {
                    this.dataInfo = res.data.data;
                })
            },
            saveUser() {
                axios.put("/api/user", {
                    avatar_url: this.dataInfo.avatar_url,
                    nickname: this.dataInfo.nickname,
                }).then(res => {
                    if (res.data.status === "1") {
                        this.$router.push("/my");
                    }
                })
            },
            handleAvatarSuccess(res, file) {
                this.dataInfo.avatar_url = res.data.imgUrl;
            }
        }
    }
</script>

<style scoped lang="less">
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
