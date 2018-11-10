<template>
    <div class="photo-container">
        <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="(item,i) in cates" :key="i" @tap="getPhotoListByCateId(item.id)">
                    {{item.title}}
                </a>
            </div>
        </div>
    </div>
    <ul class="photo-list">
        <router-link v-for="(item,index) in list" :key="index" tag="li" :to="'/home/photoinfo/'+item.id">
            <img v-lazy="item.img_url">
            <div class="info">
            <h1 class="info-title">{{ item.title }}</h1>
            <div class="info-body">{{ item.zhaiyao }}</div>
            </div>
        </router-link>
    </ul>
    </div>

</template>
<script>
import mui from "@/lib/js/mui.min.js";
export default {
  data() {
    return {
      cates: [],
      list: []
    };
  },
  mounted() {
    // 需要在组件的 mounted 事件钩子中，注册 mui 的 scroll 滚动事件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(0);
  },
  methods: {
    getAllCategory() {
      this.$http.get("/api/getimgcategory").then(res => {
        // console.log(res);
        if (res.data.status === 0) {
          res.data.message.unshift({ title: "全部", id: 0 });
          this.cates = res.data.message;
        }
      });
    },
    getPhotoListByCateId(id) {
      this.$http.get("/api/getimages/" + id).then(res => {
        // console.log(res);
        if (res.data.status === 0) {
          this.list = res.data.message;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
* {
  touch-action: pan-y;
}
.photo-container {
  .photo-list {
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li {
      background-color: #ccc;
      text-align: center;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999;
      position: relative;
      img {
        width: 100%;
        vertical-align: middle;
      }
      /*图片懒加载样式 mint-ui提供*/
      img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
      .info {
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        max-height: 84px;
        .info-title {
          font-size: 14px;
        }
        .info-body {
          font-size: 13px;
        }
      }
    }
  }
}
</style>


