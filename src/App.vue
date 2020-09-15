<template>
    <div id="app">
        <Login v-if="showLoginFlag" @closeLogin="showLoginFlag = false"></Login>
        <!-- 顶部 -->
        <HeaderTop
            @signIn="showLoginFlag = true"
            v-if="$route.path == './home'"
        ></HeaderTop>
        <router-view />
    </div>
</template>

<script>
import HeaderTop from './components/HeaderTop/HeaderTop';
import Login from './components/Login/Login';
export default {
    //外部组件
    components: { HeaderTop, Login },

    //内部数据
    data() {
        return {
            showLoginFlag: false,
        };
    },

    //监听属性
    computed: {},

    //方法集合
    methods: {},
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
    min-width: 1000px;
    height: 100%;
}
</style>
