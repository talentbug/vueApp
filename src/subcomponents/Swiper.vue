<template>
<mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,index) in lunbotulist" :key="index">
        <img :src="item.img" alt="" :class="{'full':isfull}">
    </mt-swipe-item>
</mt-swipe>
</template>

<script>
export default {
  props: ["lunbotulist", "isfull"]
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  text-align: center;
  img {
    height: 100%;
  }
  .full {
    width: 100%;
  }
}
</style>
