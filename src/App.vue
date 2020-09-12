<template>
    <div id="app">
        <HeaderTop @signIn="showLoginFlag = true"></HeaderTop>
        <div>
            <Carousel></Carousel>
        </div>
        <router-view />
        <Login v-if="showLoginFlag" @closeLogin="showLoginFlag = false"></Login>
    </div>
</template>

<script>
import HeaderTop from './components/HeaderTop/HeaderTop';
import Login from './components/Login/Login';
import Carousel from './components/Carousel/Carousel';
export default {
    //外部组件
    components: { HeaderTop, Login, Carousel },

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
    min-width: 1200px;
}
</style>
