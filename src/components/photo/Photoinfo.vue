<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
            <span>点击：{{ photoinfo.click }}次</span>
        </p>
        <hr>
        <!-- 缩略图区域 -->
        <div class="thumbs">
            <vue-preview :slides="list" @close="getThumbs"></vue-preview>
        </div>
        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>
        <!-- 放置一个现成的 评论子组件 -->
        <comment :cid="id"></comment>
    </div>
</template>

<script>
import comment from "@/subcomponents/comment";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      list: [
        {
          src: "",
          msrc: "",
          w: "",
          h: ""
        }
      ]
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("/api/getimageInfo/" + this.id).then(res => {
        // console.log(res);
        if (res.data.status === 0) {
          this.photoinfo = res.data.message[0];
        }
      });
    },
    getThumbs() {
      this.$http.get("/api/getthumimages/" + this.id).then(res => {
        console.log(res);
        if (res.data.status === 0) {
          res.data.message.forEach(item => {
            item.msrc = item.src;
            item.w = 400;
            item.h = 300;
          });
          this.list = res.data.message;
        }
      });
    }
  },
  components: {
    comment
  }
};
</script>

<style lang="less">
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
}
.my-gallery {
  display: flex;
  flex-wrap: wrap;
  figure {
    margin: 10px;
    /deep/img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>


