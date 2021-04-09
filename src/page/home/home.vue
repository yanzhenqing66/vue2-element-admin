<template>
  <el-container>
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <left-menu></left-menu>
      </el-aside>
      <el-main>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LeftMenu from '../../components/leftMenu.vue';
import VHeader from "../../components/vHeader";
export default {
  components: { VHeader, LeftMenu },
  name: "home",
  data() {
    return {
    };
  },
};
</script>

<style>
  .el-header {
    padding: 0;
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

</style>