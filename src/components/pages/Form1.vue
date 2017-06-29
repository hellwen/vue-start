<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>基本表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-col :span="11">
                    <el-form-item label="订单号">
                        <el-input v-model="form.order"></el-input>
                    </el-form-item>
                </el-col>
                <el-form-item label="客户">
                    <el-col :span="11">
                        <el-input v-model="form.customer"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="选择器">
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option key="bbk" label="步步高" value="bbk"></el-option>
                        <el-option key="xtc" label="小天才" value="xtc"></el-option>
                        <el-option key="imoo" label="imoo" value="imoo"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="日期时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
                    </el-col>
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
