<!-- login -->
<template>
    <div class="login">
        <div class="login_contain">
            <section class="login_title">
                <span>帐号登录</span>
                <div class="login-close" @click="closeLogin">
                    <i class="iconfont icon-cha"></i>
                </div>
            </section>
            <section class="login_content">
                <div class="login_input">
                    <i class="iconfont icon-phone"></i>
                    <input
                        type="tel"
                        maxlength="11"
                        placeholder="请输入正确手机号"
                        v-model="phone"
                    />
                </div>
                <div class="login_input">
                    <i class="iconfont icon-yanzhengma"></i>
                    <input
                        type="tel"
                        maxlength="4"
                        placeholder="图片验证码"
                        v-model="captcha"
                    />
                    <div @click="refreshCode" class="identify">
                        <SIdentify :identifyCode="identifyCode"></SIdentify>
                    </div>
                </div>
                <div class="login_input">
                    <i class="iconfont icon-yanzhengma1"></i>
                    <input
                        type="tel"
                        maxlength="6"
                        placeholder="短信验证码"
                        v-model="messCode"
                    />
                    <button
                        :disabled="!rightPhone"
                        class="get_verification"
                        :class="{ right_phone: rightPhone }"
                        @click.prevent="getCode"
                    >
                        {{
                            computeTime > 0
                                ? `已发送(${computeTime}s)`
                                : '获取验证码'
                        }}
                    </button>
                </div>
            </section>
            <section>
                <div class="login_signIn" @click="login">
                    登 录
                </div>
                <div class="login_signUp">
                    <span>注册</span>
                </div>
            </section>
        </div>
        <div class="shade"></div>
    </div>
</template>

<script>
import SIdentify from '../../components/Identify/Identify';
export default {
    //外部组件
    components: { SIdentify },
    //内部数据
    data() {
        return {
            computeTime: 0, //倒计时
            phone: '', //电话
            captcha: '', // 图形验证码
            messCode: '', //短信
            reg: /^1\d{10}$/,
            identifyCode: '', // 验证码初始值
        };
    },

    //监听属性
    computed: {
        rightPhone() {
            return (
                /^1\d{10}$/.test(this.phone) &&
                this.identifyCode == this.captcha
            );
        },
    },

    //方法集合
    methods: {
        async getCode() {
            // 如果当前没有计时
            if (!this.computeTime) {
                // 启动倒计时
                this.computeTime = 30;
                this.intervalId = setInterval(() => {
                    this.computeTime--;
                    if (this.computeTime <= 0) {
                        // 停止计时
                        clearInterval(this.intervalId);
                    }
                }, 1000);
            }
        },
        login() {
            //登录
        },
        // 随机生成验证码字符串
        createCode() {
            for (let i = 0; i < 4; i++) {
                this.identifyCode += Math.floor(Math.random() * 10);
            }
        },
        refreshCode() {
            this.identifyCode = '';
            for (let i = 0; i < 4; i++) {
                this.identifyCode += Math.floor(Math.random() * 10);
            }
        },
        closeLogin() {
            this.$emit('closeLogin');
        },
    },
    //生命周期 - 创建完成
    created() {},
    //生命周期 - 挂载完成
    mounted() {
        this.createCode();
    },
};
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
}

.shade {
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.3;
}

.login_contain {
    width: 530px;
    height: 550px;
    background: #ffffff;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
    .login_title {
        height: 60px;
        line-height: 60px;
        font-size: 22px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: bolder;
        text-align: left;
        color: #666666;
        padding-left: 20px;
        border-bottom: 1px solid #eaeaea;
        .login-close {
            float: right;
            margin-right: 20px;
            cursor: pointer;
        }
    }
    .login_content {
        padding: 35px 50px;
        .login_input {
            position: relative;
            margin: 25px;
            input {
                width: 400px;
                height: 50px;
                border: 1px solid #979797;
                border-radius: 5px;
                line-height: 50px;
                padding-left: 45px;
                font-size: 16px;
                outline: none;
                &:focus {
                    border: 1px solid $theme_blue;
                }
            }
            i {
                position: absolute;
                font-size: 18px;
                top: 11px;
                left: 10px;
                border-right: 1px solid #979797;
                padding-right: 8px;
            }
        }
    }
}

.get_verification {
    position: absolute;
    right: 10px;
    top: 14px;
    background: #ffffff;
    border: none;
    color: #a0a0a0;
    &.right_phone {
        color: $theme_blue;
    }
}

.login_signIn {
    background: $theme_blue;
    color: #ffffff;
    border-radius: 5px;
    width: 400px;
    height: 50px;
    margin: 0px auto;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    cursor: pointer;
}

.login_signUp {
    font-family: PingFangSC, PingFangSC-Regular;
    color: $theme_blue;
    margin-top: 20px;
    font-weight: bolder;
    font-size: 18px;

    span {
        cursor: pointer;
    }
}

.identify {
    position: absolute;
    top: 5px;
    right: -10px;
}
</style>
