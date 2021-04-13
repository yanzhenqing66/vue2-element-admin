/*
<el-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page="page"
  :page-sizes="pageSizes"
  :page-size="pageSize"
  layout="total, sizes, prev, pager, next, jumper"
  :total="total">
</el-pagination>
*/

export const page = {
  data() {
    return {
      page: 1,
      total: 0,
      pageSize: 20,
      pageSizes: Object.freeze([5, 10, 20, 40, 60]),
      searchParams: {}
    }
  },

  methods: {
    getList() {
      throw new Error('getList is not defined')
    },

    handleSizeChange(size) {
      this.page = 1
      this.pageSize = size
      this.getList()
    },

    handleCurrentChange(page) {
      this.page = page
      this.getList()
    },

    search(params) {
      this.searchParams = Object.freeze(params)
      this.page = 1
      this.getList()
    }
  }
}