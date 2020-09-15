<!-- 后台系统菜单 -->
<template>
    <div>
        <a-menu
            mode="inline"
            style="height:100%"
            :default-selected-keys="['1_1']"
            :default-open-keys="['sub1']"
            :open-keys="openKeys"
            theme="dark"
            @select="onSelect"
            @openChange="onOpenChange"
        >
            <a-sub-menu key="sub1">
                <span slot="title">
                    <a-icon type="user" />
                    <span>用户管理</span>
                </span>
                <a-menu-item key="1_1">
                    <span>我要发货</span>
                </a-menu-item>
                <a-menu-item key="1_2">
                    <span> 我的运单</span>
                </a-menu-item>
                <a-menu-item key="1_3">
                    <span> 我的运力</span>
                </a-menu-item>
                <a-menu-item key="1_4">
                    <span> 我的服务</span>
                </a-menu-item>
                <a-menu-item key="1_5">
                    <span> 我的任务</span>
                </a-menu-item>
                <a-menu-item key="1_6">
                    <span>我的费用</span>
                </a-menu-item>
                <a-menu-item key="1_7">
                    <span>我的报价</span>
                </a-menu-item>
            </a-sub-menu>

            <a-menu-item key="2_1">
                <a-icon type="apartment" />
                <span>企业管理</span>
            </a-menu-item>

            <a-menu-item key="3_1">
                <a-icon type="setting" />
                <span>我要发货</span>
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
        return {
            openKeys: ['sub1'],
        };
    },

    //监听属性
    computed: {},

    //方法集合
    methods: {
        onSelect(selectKey) {
            const key = selectKey.key.split('_');
            if (key[0] === '1') {
                this.openKeys = ['sub1'];
            } else {
                this.openKeys = [];
            }
        },
        onOpenChange(keys) {
            this.openKeys = keys;
        },
    },

    //生命周期 - 创建完成
    created() {},
    //生命周期 - 挂载完成
    mounted() {},
};
</script>

<style lang="scss" scoped></style>
