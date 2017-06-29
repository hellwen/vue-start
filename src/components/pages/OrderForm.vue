<template>
<div>
  <div class="crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item><i class="el-icon-date"></i>表格</el-breadcrumb-item>
      <el-breadcrumb-item>订单</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="订单" name="first">
      <order-form-master></order-form-master>
    </el-tab-pane>
    <el-tab-pane label="明细" name="second">
      <order-form-detail></order-form-detail>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
  import OrderFormMaster from './OrderFormMaster'
  import OrderFormDetail from './OrderFormDetail'

  export default {
    data () {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    },
    components: {
      OrderFormMaster, OrderFormDetail
    }
  }
</script>
