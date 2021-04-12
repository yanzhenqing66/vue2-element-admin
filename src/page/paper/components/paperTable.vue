<template>
  <div class="paperTable">
    <el-table :data="tableData">
      <el-table-column label="试卷ID" prop="id" align="center"></el-table-column>
      <el-table-column label="试卷名" prop="content" align="center"></el-table-column>
      <el-table-column label="考试类型" prop="examType.title" align="center"></el-table-column>
      <el-table-column label="地区/系统" prop="systemAreaName" align="center"></el-table-column>
      <el-table-column label="考试年份" prop="examYear" align="center"></el-table-column>
      <el-table-column label="考试形式" prop="examFomat.title" align="center"></el-table-column>
      <el-table-column label="试卷状态" prop="paperStatus.title" align="center"></el-table-column>
      <el-table-column label="套题详情" prop="paperStatus.title" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'paperTable',

  props: ['tableData'],
}
</script>

<style>

</style>