<template>
  <el-container class="home">
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-container class="home-main">
      <el-aside width="200px">
        <left-menu></left-menu>
      </el-aside>
      <el-main>
        <keep-alive>
          <router-view />
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LeftMenu from "../../components/leftMenu.vue";
import VHeader from "../../components/vHeader";
export default {
  components: { VHeader, LeftMenu },
  name: "home",
  data() {
    return {};
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}

.home-main {
  margin-top: 65px;
}

.el-container {
  height: 100%;
}

.el-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-aside {
  background-color: #F8F9FB; 
}
</style>