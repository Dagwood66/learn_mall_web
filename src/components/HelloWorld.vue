<template>
    <div class="hello">

    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            axios.get("api/test").then(res => {
                console.log(res.data);
            debugger
            }, err => {
                console.log(res.data);
            debugger
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
