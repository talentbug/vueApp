export default {
  data() {
    return {
      getimgs: []
    };
  },
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.$http.get("/api/getlunbo").then(res => {
        // console.log(res);
        if (res.data.status === 0) {
          this.getimgs = res.data.message;
        } else {
          Toast("数据加载失败!");
        }
      });
    }
  }
}
