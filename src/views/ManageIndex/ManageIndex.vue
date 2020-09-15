<!-- 后台管理系统 -->
<template>
    <a-layout class="manage_main">
        <a-layout-sider
            v-model="collapsed"
            :trigger="null"
            collapsible
            theme="dark"
        >
            <div class="logo" v-show="!collapsed">
                <div class="header_logo">
                    <img src="../../assets/images/logo_white.png" />
                </div>
                <div class="header_title">
                    多式联运智能物流平台
                </div>
                <div class="line"></div>
            </div>
            <ManageNav></ManageNav>
        </a-layout-sider>
        <a-layout>
            <a-layout-header class="manage_header">
                <div class="trigger">
                    <a-icon
                        :type="collapsed ? 'caret-right' : 'caret-left'"
                        @click="() => (collapsed = !collapsed)"
                    />
                </div>
            </a-layout-header>
            <a-layout-content
                :style="{
                    margin: '24px 16px',
                    padding: '24px',
                    background: '#fff',
                    minHeight: '280px',
                    borderRadius: '5px',
                }"
            >
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
import ManageNav from '../../components/ManageNav/ManageNav';
export default {
    //外部组件
    components: { ManageNav },

    //内部数据
    data() {
        return { collapsed: false };
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
.manage_main {
    width: 100%;
    height: 100%;
    .logo {
        //logo名称
        > div {
            float: left;
        }
        .header_logo {
            padding-top: 17px;
            margin-left: 15px;
            img {
                width: 20px;
                height: 25px;
            }
        }
        .header_title {
            margin-left: 10px;
            color: #ffffff;
            line-height: 60px;
            font-weight: 800;
            font-family: PingFang SC, PingFang SC-Heavy;
        }
        .line {
            width: 200px;
            height: 1px;
            background: #868686;
        }
    }
    .manage_header {
        background: #fff;
        padding: 0;
        height: 60px;
        .trigger {
            float: left;
            color: #ffffff;
            background: #2c3e50;
            height: 30px;
            line-height: 30px;
            margin-top: 15px;
            width: 20px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
}
</style>
