<!-- headerTop -->
<template>
    <div class="header_content">
        <div class="header_info">
            <div class="header_logo">
                <img src="../../assets/images/defaultLogo.png" />
            </div>
            <div class="header_title">多式联运智能物流平台</div>
        </div>
        <div class="heard_search">
            <!-- <input type="text" id="search-input" value="" placeholder="搜索" />
            <div class="search_chaxun">
                <i class="iconfont icon-chaxun"></i>
            </div> -->

            <router-link to="/manageIndex">进入后台</router-link>
        </div>

        <div class="header_login">
            <div class="user_login" @click="signIn">
                <i class="iconfont icon-denglu" style="margin-right:5px"></i
                >登录
            </div>
            <div class="user_signUp" @click="signUp">
                <i class="iconfont icon-zhuce" style="margin-right:5px"></i>注册
            </div>
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
    padding: 0 10px;
    background: #ffffff;
    position: relative;
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
    .heard_search {
        float: left;
        border-radius: 5px;
        height: 30px;
        line-height: 20px;
        border: 1px solid #dedede;
        background-color: #fff;
        color: #333;
        outline: none;
        font-size: 14px;
        position: absolute;
        left: 40%;
        top: 25%;
        width: 350px;
        input {
            padding: 4px 10px;
            float: left;
            width: 290px;
        }
        .search_chaxun {
            width: 40px;
            float: right;
            background: $theme_blue;
            color: #ffffff;
            cursor: pointer;
            height: 30px;
            line-height: 30px;
            border: 1px solid #3b99fc;
            position: relative;
            top: -1px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
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
            margin-right: 20px;
        }
        .user_login,
        .user_signUp {
            line-height: 30px;
            color: #8e8e93;
            cursor: pointer;
            &:hover:not(span) {
                color: #3b99fc;
            }
        }
    }
}
</style>
