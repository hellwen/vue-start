<template>
<div>
  <mu-raised-button label="添 加" primary @click="showStyleDialog"/>

  <mu-dialog :open="styleDialogVisible" title="款 式" @close="closeStyleDialog"
    v-if="styleDialogVisible">
    <order-style @closeStyleDialog="closeStyleDialog"
      @showLotDialog="showLotDialog"
      :orderStyle="orderStyle">
    </order-style>
  </mu-dialog>

  <mu-dialog :open="lotDialogVisible" title="批 次" @close="closeLotDialog"
    v-if="lotDialogVisible">
    <order-lot @closeLotDialog="closeLotDialog"
      :orderLot="orderLot">
    </order-lot>
  </mu-dialog>

  <mu-raised-button label="template" primary @click="showTemplate"/>

  <mu-table border="1">
    <mu-tr>
      <mu-th>Month</mu-th>
      <mu-th>Savings</mu-th>
    </mu-tr>
    <mu-tr>
      <mu-td>January</mu-td>
      <mu-td>ok</mu-td>
    </mu-tr>
    <mu-tr v-if="iTemplate">
      <mu-td colspan="2">
        <mu-text-field label="Lot" hintText="Lot"/>
        <mu-text-field label="Name" hintText="Nmae"/>
        <mu-flexbox class="mt8">
          <mu-flexbox-item class="flex-demo">
            <mu-text-field label="Lot" hintText="Lot"/>
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo">
            <mu-text-field label="Name" hintText="Nmae"/>
          </mu-flexbox-item>
        </mu-flexbox>
      </mu-td>
    </mu-tr>
  </mu-table>

  <el-table
    :data="styles.data"
    @expand="rowExpand"
    highlight-current-row
    style="width: 100%">
    <el-table-column type="expand">
      <template scope="props">
        <div v-for="lot in lots.data">
        <div v-if="lot.style == props.row.style">
          <div>Lot: {{ lot.lot }}</div>
          <div>Country: {{ lot.country }}</div>
          <div>Deliver: {{ lot.deliver }}</div>
        <el-button size="small">Delete</el-button>
        <el-button size="small">Edit</el-button>
        <table border="1">
          <tr><th>颜色</th>
          <th v-for="row in size_group.data">{{ row.size }}</th>
          </tr>

          <tr v-for="color in colors.data" v-if="color.lot == lot.lot">
            <td>{{ color.color }}</td>
            <td v-for="row in size_group.data">
              <div v-for="size in sizes.data" v-if="size.key == color.key && size.size === row.size">{{ size.quantity }}</div>
            </td>
          </tr>
        </table>
        </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      label="款号"
      prop="style"
      width="100"
      :filters="filters"
      :filter-method="filterStyle"
      filter-placement="bottom-end">
    </el-table-column>
    <el-table-column
      label="名称"
      prop="name">
    </el-table-column>
<el-table-column label="操作">
  <template scope="scope">
    <el-button size="small" @click="showLotDialog">添 加</el-button>
    <el-button size="small">编 辑</el-button>
    <el-button size="small" type="danger">删 除</el-button>
  </template>
</el-table-column>
  </el-table>
</div>
</template>

<script>
  import OrderStyle from './OrderFormDetailStyle'
  import OrderLot from './OrderFormDetailLot'

  export default {
    data () {
      // const self = this
      return {
        style_url: '../../../static/demo/style.json',
        lot_url: '../../../static/demo/lot.json',
        color_url: '../../../static/demo/color.json',
        size_url: '../../../static/demo/size.json',
        size_group_url: '../../../static/demo/size_group.json',
        filters: [{
          text: 'S001',
          value: 'S001'
        }, {
          text: 'S002',
          value: 'S002'
        }, {
          text: 'S003',
          value: 'S003'
        }],
        styles: {},
        lots: {},
        colors: {},
        sizes: {},
        size_group: {},
        styleDialogVisible: false,
        lotDialogVisible: false,
        orderStyle: {},
        orderLot: {},
        iTemplate: false,
        showCheckbox: false
      }
    },
    methods: {
      filterStyle (value, row) {
        return row.style === value
      },
      rowExpand (row, expanded) {
        return ''
      },
      loadStyle (order) {
        let t = this
        this.$http.get(this.style_url)
          .then(response => {
            t.styles = response.data
          })
          .catch(error => {
            console.log(error)
          })
      },
      loadLot (style) {
        let t = this
        this.$http.get(this.lot_url)
          .then(response => {
            t.lots = response.data
          })
          .catch(error => {
            console.log(error)
          })
      },
      loadColor (lot) {
        let t = this
        this.$http.get(this.color_url)
          .then(response => {
            t.colors = response.data
          })
          .catch(error => {
            console.log(error)
          })
      },
      loadSize (color) {
        let t = this
        this.$http.get(this.size_url)
          .then(response => {
            t.sizes = response.data
          })
          .catch(error => {
            console.log(error)
          })
      },
      loadSizeGroup () {
        let t = this
        this.$http.get(this.size_group_url)
          .then(response => {
            t.size_group = response.data
          })
          .catch(error => {
            console.log(error)
          })
      },
      showStyleDialog () {
        this.styleDialogVisible = true
      },
      closeStyleDialog: function () {
        this.styleDialogVisible = false
      },
      showLotDialog () {
        this.lotDialogVisible = true
      },
      closeLotDialog: function () {
        this.lotDialogVisible = false
        // if (this.styleDialogVisible) {
        //   this.styleDialogVisible = false
        // }
      },
      showTemplate: function () {
        this.iTemplate = !this.iTemplate
      }
    },
    mounted: function () {
      this.loadStyle('')
      this.loadLot('')
      this.loadColor('')
      this.loadSize('')
      this.loadSizeGroup()
    },
    components: {
      OrderStyle, OrderLot
    }
  }
</script>
