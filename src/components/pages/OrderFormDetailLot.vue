<template>
<div>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="Lot">
      <el-input v-model="form.lot"></el-input>
    </el-form-item>
    <el-form-item label="国别">
      <el-input v-model="form.country"></el-input>
    </el-form-item>
    <el-form-item label="交期">
      <el-date-picker
           v-model="form.deliver"
           type="date"
           placeholder="选择日期">
         </el-date-picker>
    </el-form-item>
  </el-form>

  <el-tabs v-model="activeTab">
     <el-tab-pane label="颜色尺码" name="tab1">
       颜色
     </el-tab-pane>
   </el-tabs>

  <div slot="footer" class="dialog-footer">
    <el-button type="text" @click="cancel">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
    <el-button @click="confirmAdd">确认并添加</el-button>
    <el-button type="text" @click="previous">上一步</el-button>
  </div>
</div>
</template>

<script>
  export default {
    props: ['orderLot', 'dialogVisible'],
    data () {
      return {
        activeTab: 'tab1',
        showCheckbox: false,
        form: {
          lot: '',
          country: '',
          deliver: ''
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      confirm: function () {
        this.$emit('closeLotDialog')
      },
      confirmAdd: function () {
        this.$emit('closeLotDialog')
      },
      cancel: function () {
        this.$emit('closeLotDialog')
      },
      previous: function () {
        this.$emit('closeLotDialog')
      }
    }
  }
</script>
