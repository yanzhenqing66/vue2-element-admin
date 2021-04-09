<template>
  <div class="header">
    <h1>管理中心</h1>
    <div class="user">
      <i class="el-icon-s-promotion"></i>
      <span class="username">{{username}}</span>
      <i class="el-icon-caret-bottom"></i>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "vHeader",
  data() {
    return {};
  },

  computed: {
    ...mapState('auth', ['username'])
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  background-color: #fff;
  padding: 0 20px;

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
      margin: 0 5px 0 20px;
    }
  }
}
</style>
