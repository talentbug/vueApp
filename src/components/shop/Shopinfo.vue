<template>
<div class="goodsinfo-container">
    <!-- 商品轮播图区域 -->
    <swiper :lunbotulist="lunbotu" :isfull="false"></swiper>
    <!-- 商品购买区域 -->
    <div class="mui-card">
        <div class="mui-card-header">页眉</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                御剑乘风来 除魔天地间
            </div>
        </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
        <div class="mui-card-header">页眉</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                御剑乘风来 除魔天地间
            </div>
        </div>
        <div class="mui-card-footer">
            页脚
        </div>
    </div>
</div>
</template>

<script>
import swiper from "@/subcomponents/Swiper.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http.get("/api/getthumimages/" + this.id).then(res => {
        // console.log(res);
        if (res.data.status === 0) {
          res.data.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotu = res.data.message;
        }
      });
    }
  },
  components: {
    swiper
  }
};
</script>

<style lang="less" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  /deep/.mint-swipe-item {
    background-color: #fff;
  }
}
</style>
