import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pid: 93,
        isLoading: false, // 控制全局加载遮罩
    },
    actions: {
        openLoading({commit, state}) {
            state.isLoading = true;
        },
        closeLoading({commit, state}) {
            state.isLoading = false;
        }
    }
});