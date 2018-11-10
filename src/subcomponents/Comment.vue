<template>
   <div class="cmt-container">
        <h3 class="title">发表评论</h3>
        <hr>
        <textarea placeholder="请开始你的表演（此处只能吹120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComments">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="i">
                 <div class="cmt-title">第{{++i}}楼&nbsp;&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}</div>
                 <div class="cmt-body">{{item.content==='undefined'?'此用户很懒，嘛都没写':item.content}}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
   </div>
</template>

<script>
import mix from "./Comment-mixins.js";

export default {
  mixins: [mix]
};
</script>

<style lang="less" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    height: 85px;
  }
  .cmt-list {
    padding: 6px 0;
    .cmt-title {
      line-height: 30px;
      background-color: #e7e5e5;
      font-size: 13px;
    }
    .cmt-body {
      line-height: 35px;
      text-indent: 2em;
    }
  }
}
</style>


