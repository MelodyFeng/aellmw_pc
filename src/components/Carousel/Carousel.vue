<template>
    <a-carousel arrows autoplay>
        <div
            slot="prevArrow"
            class="custom-slick-arrow"
            style="left: 10px;zIndex: 1"
        >
            <a-icon type="left-circle" />
        </div>
        <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
            <a-icon type="right-circle" />
        </div>
        <div class="car_img"><img src="../../assets/images/1.png" /></div>
        <div class="car_img"><img src="../../assets/images/2.png" /></div>
        <div class="car_img"><img src="../../assets/images/3.png" /></div>
    </a-carousel>
</template>
<script>
export default {};
</script>
<style scoped>
.ant-carousel >>> .slick-slide {
    text-align: center;
    background: #364d79;
    overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
    display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
    opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
    color: #fff;
}

.car_img {
    width: 100%;
}
.car_img img {
    width: 100%;
}
</style>
