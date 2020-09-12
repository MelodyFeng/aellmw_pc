<!-- headerTop -->
<template>
    <div class="header_content">
        <div class="header_info">
            <div class="header_logo">
                <img src="../../assets/images/defaultLogo.png" />
            </div>
            <div class="header_title">多式联运智能物流平台</div>
        </div>
        <nav class="header_nav">
            <Nav></Nav>
        </nav>
        <div class="header_login">
            <div class="user_login" @click="signIn">
                <i class="iconfont icon-denglu" style="margin-right:5px"></i
                >登录
            </div>
            <span style="position: relative;top: 4px;right: 60px;">|</span>
            <div class="user_signUp" @click="signUp">
                <i class="iconfont icon-zhuce" style="margin-right:5px"></i>注册
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '../../components/Nav/Nav';
export default {
    //外部组件
    components: { Nav },

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
    padding: 0 5%;
    background: #f6f7fb;
    .header_info {
        //logo名称
        > div {
            float: left;
        }
        .header_logo {
            padding-top: 15px;
            img {
                width: 30px;
                height: 30px;
            }
        }
        .header_title {
            margin-left: 20px;
            color: #515151;
            line-height: 60px;
            font-weight: 800;
            font-family: PingFang SC, PingFang SC-Heavy;
        }
    }
    .header_nav {
        float: left;
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
            margin-right: 20px;
        }
        .user_login,
        .user_signUp {
            line-height: 30px;
            color: #8e8e93;
            cursor: pointer;
            &:hover:not(span) {
                color: red;
            }
        }
    }
}
</style>
