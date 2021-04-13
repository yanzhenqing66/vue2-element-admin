<template>
  <div class="paperSearch">
    <el-form :model="form">
      <el-form-item label="考试类型" inline>
        <el-select v-model="form.examType">
          <el-option
           v-for="item in options"
           :key="item.value"
           :label="item.title"
           :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'paperSearch',

  data() {
    return {
      form: {
        examType: ''
      },
      options: [
        {title: '是', value: 'yes'},
        {title: '否', value: 'no'},
      ]
    }
  },

  methods: {
    search() {
      this.$emit('search', this.form)
    }
  }
}
</script>

<style>

</style>