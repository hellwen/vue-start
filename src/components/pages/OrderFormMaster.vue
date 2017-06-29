<template>
<div>
    <div class="form-box">
        <el-form label-position="top" :model="form">
            <el-form-item label="订单号">
                <el-input v-model="form.order"></el-input>
            </el-form-item>
            <el-form-item label="客户">
                <el-input v-model="form.customer"></el-input>
            </el-form-item>
            <el-form-item label="日期时间">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        order: '',
        customer: '',
        date: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$message.success('提交成功！')
    }
  }
}
</script>
