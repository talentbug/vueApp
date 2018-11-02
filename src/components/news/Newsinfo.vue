<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{newsinfo.add_time | dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
            <span>点击:{{newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
        <comment :cid="this.id"></comment>
    </div>
    
</template>
<script>
import comment from "@/subcomponents/comment";
// 引入toast样式
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created() {
    this.getnewsinfo();
  },
  methods: {
    getnewsinfo() {
      this.$http.get("/api/getnew/" + this.id).then(res => {
        // console.log(res);
        if (res.data.status === 0) {
          this.newsinfo = res.data.message[0];
        } else {
          Toast("数据加载失败");
        }
      });
    }
  },
  components: {
    comment
  }
};
</script>

<style lang="less" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: skyblue;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    /deep/ img {
      width: 100%;
    }
  }
}
</style>


