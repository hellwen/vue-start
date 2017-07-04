<template>
<div>
  <el-form ref="form" :model="form" label-width="formLabelWidth">
    <el-form-item label="款 号">
      <el-input v-model="form.style"></el-input>
    </el-form-item>
    <el-form-item label="名 称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
  </el-form>

  <div slot="footer" class="dialog-footer">
    <el-button type="text" @click="cancel">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
    <el-button @click="next">下一步</el-button>
  </div>
</div>
</template>

<script>
  export default {
    props: ['orderStyle', 'dialogVisible'],
    data () {
      return {
        form: {
          style: '',
          name: ''
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      confirm: function () {
        this.$emit('closeStyleDialog')
      },
      cancel: function () {
        this.$emit('closeStyleDialog')
      },
      next: function () {
        this.$emit('showLotDialog')
      }
    }
  }
</script>
