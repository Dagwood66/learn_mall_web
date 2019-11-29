import Vue from 'vue'
import App from './App'
import "normalize.css"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store"
import "./css/style.less"
import router from './router'

Vue.config.productionTip = false;

Vue.use(MintUI);
Vue.use(ElementUI);

window.vm = new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
