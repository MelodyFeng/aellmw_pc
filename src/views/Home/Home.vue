<!--  门户首页  -->
<template>
    <div>
        <!-- 导航栏 -->
        <nav class="header_nav">
            <HomeNav></HomeNav>
        </nav>
        <!-- 轮播图 -->
        <div class="carousel">
            <Carousel></Carousel>
            <SearchBox></SearchBox>
        </div>
    </div>
</template>

<script>
import HomeNav from '../../components/HomeNav/HomeNav';
import Carousel from '../../components/Carousel/Carousel';
import SearchBox from '../../components/SearchBox/SearchBox';
export default {
    //外部组件
    components: { Carousel, HomeNav, SearchBox },

    //内部数据
    data() {
        return {};
    },

    //监听属性
    computed: {},

    //方法集合
    methods: {},

    //生命周期 - 创建完成
    created() {},
    //生命周期 - 挂载完成
    mounted() {},
};
</script>

<style lang="scss" scoped>
.carousel {
    position: relative;
}
</style>
