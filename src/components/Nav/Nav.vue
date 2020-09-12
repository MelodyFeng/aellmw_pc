<!-- 导航 -->
<template>
    <div>
        <a-menu v-model="current" mode="horizontal" class="nav_container">
            <!-- 首页 -->
            <a-menu-item key="home">
                首页
            </a-menu-item>
            <!-- 查询 -->
            <a-sub-menu key="sub1">
                <span slot="title">运价查询分析</span>
                <a-menu-item-group title="查询" class="item_group">
                    <a-menu-item key="sub1_1">
                        国际联运
                    </a-menu-item>
                    <a-menu-item key="sub1_2">
                        海铁联运
                    </a-menu-item>
                    <a-menu-item key="sub1_3">
                        班列国内段
                    </a-menu-item>
                    <a-menu-item key="sub1_4">
                        集装箱测算
                    </a-menu-item>
                    <a-menu-item key="sub1_5">
                        整车测算
                    </a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="分析">
                    <a-menu-item key="sub1_6">
                        海铁联运分析
                    </a-menu-item>
                    <a-menu-item key="sub1_7">
                        国际联运分析
                    </a-menu-item>
                    <a-menu-item key="sub1_8">
                        分析二
                    </a-menu-item>
                    <a-menu-item key="sub1_9">
                        分析三
                    </a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
            <!-- 发货 -->
            <a-sub-menu key="sub2">
                <span slot="title">我要发货</span>
                <a-menu-item-group title="我要订舱">
                    <a-menu-item key="item2_1">
                        线路一
                    </a-menu-item>
                    <a-menu-item key="item2_2">
                        线路二
                    </a-menu-item>
                    <a-menu-item key="item2_3">
                        线路三
                    </a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>

            <!-- 供应链管理 -->
            <a-sub-menu key="sub3">
                <span slot="title">供应链管理 </span>
                <!-- <a-menu-item-group title="我要订舱">
                    <a-menu-item key="item2_1">
                        线路一
                    </a-menu-item>
                    <a-menu-item key="item2_2">
                        线路二
                    </a-menu-item>
                    <a-menu-item key="item2_3">
                        线路三
                    </a-menu-item>
                </a-menu-item-group> -->
            </a-sub-menu>

            <!-- 集装箱查询分析 -->
            <a-sub-menu key="sub4">
                <span slot="title">集装箱查询分析</span>
                <a-menu-item-group title="我要订舱">
                    <a-menu-item key="item4_1">
                        分析一
                    </a-menu-item>
                    <a-menu-item key="item4_2">
                        分析二
                    </a-menu-item>
                    <a-menu-item key="item4_3">
                        分析三
                    </a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>

            <!-- 新闻中心 -->
            <a-menu-item key="item5">
                新闻中心
            </a-menu-item>
            <!-- 关于我们 -->
            <a-menu-item key="item6">
                关于我们
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
export default {
    //外部组件
    components: {},

    //内部数据
    data() {
        return { current: ['home'] };
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
.nav_container {
    background: #f6f7fb;
    margin-left: 25px;
    &.ant-menu-root {
        border: none;
        line-height: 58px;
    }
}
.ant-menu-sub li.ant-menu-item {
    height: 25px;
    line-height: 25px;
}
</style>
