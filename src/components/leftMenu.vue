<template>
  <div class="vmenu">
    <el-menu 
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#F8F9FB"
      text-color="#333"
      active-text-color="#1856FF"
      router>
      <template v-for="(item, index) in menuList">
        <el-submenu 
          :index="String(1 + index)"
          :key="index"
          v-if="item.children && item.children.length > 0">
          <template>
            <span slot="title">{{item.meta && item.meta.title}}</span>
            <el-menu-item-group>
              <template 
                v-for="childItem in item.children">
                <el-menu-item
                  :key="childItem.name"
                  :index="'/home/'+childItem.name">
                    <span slot="title">{{childItem.meta && childItem.meta.title}}</span>
                  </el-menu-item>  
              </template>
            </el-menu-item-group>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "leftMenu",
  data() {
    return {};
  },

  computed: {
    ...mapGetters('auth', ['menuList']),
    defaultActive() {
      return this.$route.path
    }
  },
};
</script>

<style lang="less" scoped>
  .el-menu-vertical-demo {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 10%);
  }
</style>