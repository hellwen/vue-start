<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="订单" name="first">
      <order-form-master></order-form-master>
    </el-tab-pane>
    <el-tab-pane label="明细" name="second">
      <order-form-detail></order-form-detail>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import OrderFormMaster from './OrderFormMaster'
  import OrderFormDetail from './OrderFormDetail'

  export default {
    data () {
      return {
        activeName: 'second'
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
