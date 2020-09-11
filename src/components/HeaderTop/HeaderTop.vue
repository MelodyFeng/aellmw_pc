<!-- headerTop -->
<template>
    <div class="header_content">
        <div class="header_info">
            <div class="header_logo">
                <img src="../../assets/images/defaultLogo.png" />
            </div>
            <div class="header_title">一带一路多式联运智能物流平台</div>
        </div>
        <div class="header_login">
            <div class="user_avatar">
                <a-avatar icon="user" />
            </div>
            <div class="user_login" @click="signIn">登录</div>
            <div class="user_login" @click="signUp">注册</div>
        </div>
    </div>
</template>

<script>
export default {
    //外部组件
    components: {},

    //内部数据
    data() {
        return {};
    },

    //监听属性
    computed: {},

    //方法集合
    methods: {
        signIn() {
            //开启登录浮层
            this.$emit('signIn');
        },
        signUp() {
            //开启登录浮层
        },
    },
};
</script>

<style lang="scss" scoped>
.header_content {
    width: 100%;
    height: 60px;
    padding: 0 100px;
    background: #f6f7fb;
    .header_info {
        //logo名称
        > div {
            float: left;
        }
        .header_logo {
            padding-top: 10px;
            img {
                width: 40px;
                height: 40px;
            }
        }
        .header_title {
            margin-left: 30px;
            color: #515151;
            line-height: 60px;
            font-weight: 800;
            font-family: PingFang SC, PingFang SC-Heavy;
        }
    }
    .header_login {
        //登录
        float: right;
        padding-top: 15px;
        div {
            float: left;
        }
        .user_avatar {
            width: 30px;
            height: 30px;
            margin-right: 15px;
        }
        .user_login {
            line-height: 30px;
            color: #8e8e93;
            margin-right: 10px;
            cursor: pointer;
            &:hover {
                color: red;
            }
        }
    }
}
</style>
