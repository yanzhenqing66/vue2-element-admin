<template>
  <div class="paper">
    <paper-search @search="search"></paper-search>
    <paper-table :tableData="tableData"></paper-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import {getPaperList} from '@/api/api.js'
import PaperTable from './components/paperTable.vue'
import {page} from '@/common/mixins.js'
import PaperSearch from './components/paperSearch.vue'
export default {
  name: 'paper',

  components: {
    PaperTable,
    PaperSearch
  },

  mixins: [page],

  data() {
    return{
      tableData: []
    }
  },

  created() {
    this.getList()
  },

  methods: {
    getList() {
      Object.assign(this.searchParams, {page: this.page, size: this.pageSize})
      getPaperList(this.searchParams).then(res => {
        this.tableData = res.data.list
        this.total = res.data.total
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .paper {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
  }
</style> 