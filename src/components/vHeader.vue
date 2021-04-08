<template>
  <div class="header">
    <div class="container">
      <h1>管理中心</h1>
      <div class="user">
        <i class="el-icon-s-promotion"></i>
        <span class="username">用户</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vHeader",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  background-color: #fff;

  .container {
    width: 1350px;
    margin: 0 auto;

    h1 {
      float: left;
      font-size: 25px;
      font-weight: 600;
      line-height: 60px;
      background-image: -webkit-linear-gradient(
        bottom,
        rgb(201, 115, 255),
        rgb(20, 11, 255)
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .user {
      float: right;
      line-height: 60px;

      .username {
        margin-left: 20px;
      }
    }
  }
}
</style>
