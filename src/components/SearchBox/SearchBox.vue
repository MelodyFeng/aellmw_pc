<!-- 查询模块 -->
<template>
    <div class="search_box">
        <div class="fh_button">我要<br />发货</div>
        <div class="seach_container">
            <div class="search_section">
                <span>出发地</span>
                <a-select default-value="--请选择--" class="search_select">
                    <a-select-option value="广州">
                        广州
                    </a-select-option>
                    <a-select-option value="兰州">
                        兰州
                    </a-select-option>
                    <a-select-option value="乌西">
                        乌西
                    </a-select-option>
                    <a-select-option value="西安">
                        西安
                    </a-select-option>
                    <a-select-option value="西藏">
                        西藏
                    </a-select-option>
                    <a-select-option value="义乌">
                        义乌
                    </a-select-option>
                </a-select>
            </div>
            <div class="search_section">
                <span>到达地</span>
                <a-select default-value="" class="search_select">
                    <a-select-option value="广州">
                        广州
                    </a-select-option>
                    <a-select-option value="兰州">
                        兰州
                    </a-select-option>
                    <a-select-option value="乌西">
                        乌西
                    </a-select-option>
                    <a-select-option value="西安">
                        西安
                    </a-select-option>
                    <a-select-option value="西藏">
                        西藏
                    </a-select-option>
                    <a-select-option value="义乌">
                        义乌
                    </a-select-option>
                </a-select>
            </div>
            <div class="search_section">
                <span>运输箱属</span>
                <a-select default-value="TWENTY_FOOT" class="search_select">
                    <a-select-option value="TWENTY_FOOT">
                        20英尺
                    </a-select-option>
                    <a-select-option value="FORTY_FOOT">
                        40英尺
                    </a-select-option>
                </a-select>
            </div>
            <a-button type="primary" block style="width:280px">
                查询
            </a-button>
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
    methods: {},

    //生命周期 - 创建完成
    created() {},
    //生命周期 - 挂载完成
    mounted() {},
};
</script>

<style lang="scss" scoped>
.search_box {
    width: 460px;
    height: 210px;
    position: absolute;
    left: 13%;
    top: 20px;
    background: #ffffff;
    border-radius: 5px;
    .fh_button {
        float: left;
        width: 100px;
        height: 210px;
        background: $theme_blue;
        color: white;
        font-weight: bolder;
        padding-top: 70px;
        font-size: 20px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        cursor: pointer;
        &:hover {
            background: #007bff;
        }
    }
    .seach_container {
        float: left;
        width: 360px;
        height: 210px;
        padding-top: 15px;
        .search_section {
            margin: 10px;
            height: 35px;
            span {
                float: left;
                font-weight: bolder;
                width: 100px;
                line-height: 35px;
            }
            .search_select {
                height: 30px;
                float: left;
                width: 200px;
            }
        }
    }
}

.ant-select-selection--single {
    height: 30px;
}
</style>
