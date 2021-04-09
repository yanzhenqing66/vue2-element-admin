<template>
  <div class="header">
    <h1>管理中心</h1>
    <div class="user">
      <i class="el-icon-s-promotion"></i>
      <el-dropdown>
        <span class="el-dropdown-link username">
          {{ username }}<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="handleLogout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "vHeader",
  data() {
    return {};
  },

  computed: {
    ...mapState("auth", ["username"]),
  },

  methods: {
    handleLogout() {
      this.logout()
      this.$router.push('/')
    },

    ...mapMutations('auth', ['logout'])
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  background-color: #f8f9fb;
  padding: 0 20px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 10%);

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
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>
