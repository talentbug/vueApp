<template>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newslist/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h3>{{item.title}}}</h3>
							<p class='mui-ellipsis'>
									<span>发表时间：{{item.add_time | dateFormat('YYYY-MM-DD HH:mm')}}</span>
									<span>点击:{{item.click}}次</span>
							</p>
						</div>
					</router-link>
				</li>
			</ul>
</template>
<script>
// 引入toast样式
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getnewsList();
  },
  methods: {
    getnewsList() {
      this.$http.get("/api/getnewslist").then(res => {
        // console.log(res);
        if (res.data.status === 0) {
          this.newsList = res.data.message;
        } else {
          Toast("数据加载失败");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mui-table-view {
  li {
    .mui-media-body {
      h3 {
        font-size: 14px;
      }
      .mui-ellipsis {
        color: #0094ff;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>


