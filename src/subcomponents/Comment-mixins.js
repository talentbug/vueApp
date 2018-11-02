export default {
  data() {
    return {
      pageIndex: 1,
      comments: [],
      msg: ""
    };
  },
  created() {
    this.getcomments();
  },
  methods: {
    getcomments() {
      this.$http
        .get("/api/getcomments/" + this.cid + "?pageindex=" + this.pageIndex)
        .then(res => {
          //   console.log(res);
          if (res.data.status === 0) {
            this.comments = this.comments.concat(res.data.message);
          } else {
            Toast("评论加载失败");
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getcomments();
    },
    postComments() {
      if (this.msg.trim().length === 0) {
        return Toast("评论不能为空");
      }
      this.$http
        .post("/api/postcomment/" + this.cid, {
          content: this.msg.trim()
        })
        .then(res => {
          if (res.data.status === 0) {
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.comments.unshift(cmt);
            this.msg = "";
          } else {
            Toast("发表评论失败");
          }
        });
    }
  },
  props: ["cid"]
}
