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

  <md-button class="md-raised md-primary" @click="showTemplate">template</md-button>

  <md-table-card>
    <md-toolbar>
      <h1 class="md-title">Nutrition</h1>
      <md-button class="md-icon-button">
        <md-icon>filter_list</md-icon>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
    </md-toolbar>

    <md-table-alternate-header md-selected-label="selected">
      <md-button class="md-icon-button">
        <md-icon>delete</md-icon>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>more_vert</md-icon>
      </md-button>
    </md-table-alternate-header>

    <md-table md-sort="calories">
      <md-table-header>
        <md-table-row>
          <md-table-head md-sort-by="dessert">Dessert (100g serving)</md-table-head>
          <md-table-head md-sort-by="type" width="100px">Type</md-table-head>
          <md-table-head md-sort-by="calories" md-numeric md-tooltip="The total amount of food energy and the given serving size">Calories (g)</md-table-head>
          <md-table-head md-sort-by="fat" md-numeric>Fat (g)</md-table-head>
          <md-table-head>
            <md-icon>message</md-icon>
            <span>Comments</span>
          </md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(row, rowIndex) in nutrition" :key="rowIndex" :md-item="row" md-selection>
          <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" :md-numeric="columnIndex !== 'dessert' && columnIndex !== 'comment' && columnIndex !== 'type'">
            <span v-if="columnIndex === 'comment'">{{ column }}</span>

            <md-button class="md-icon-button" v-if="columnIndex === 'comment'">
              <md-icon>edit</md-icon>
            </md-button>

            <md-select
              placeholder="Type"
              :name="'type' + columnIndex"
              :id="'type' + columnIndex"
              v-model="nutrition[rowIndex].type"
              v-if="columnIndex === 'type'">
              <md-option value="ice_cream">Ice Cream</md-option>
              <md-option value="pastry">Pastry</md-option>
              <md-option value="other">Other</md-option>
            </md-select>

            <span v-if="columnIndex !== 'type' && columnIndex !== 'comment'">

              <md-input-container>
                <label>{{ column }}</label>
  <md-input v-model="initialValue">{{ column }}</md-input>
</md-input-container>
            </span>
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </md-table-card>


  <md-table>
    <md-table-header>
      <md-table-row>
        <md-table-head>Dessert (100g serving)</md-table-head>
        <md-table-head md-numeric>Calories (g)</md-table-head>
      </md-table-row>
    </md-table-header>

    <md-table-body>
      <md-table-row>
        <md-table-cell>Dessert Name</md-table-cell>
        <md-table-cell md-numeric>10</md-table-cell>
      </md-table-row>
      <md-table-row v-if="iTemplate">
        <md-table-cell colspan="2">
          <md-input-container>
            <label>Initial value</label>
            <md-input v-model="initialValue"></md-input>
          </md-input-container>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <md-input-container>
            <md-input v-model="initialValue"></md-input>
          </md-input-container>
        </md-table-cell>
        <md-table-cell md-numeric>20</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Dessert Name</md-table-cell>
        <md-table-cell md-numeric>12</md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>

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
        showCheckbox: false,
        nutrition: [{
          dessert: 'Frozen yogurt',
          type: 'ice_cream',
          calories: '159',
          fat: '6.0',
          comment: 'Icy'
        }, {
          dessert: 'Ice cream sandwich',
          type: 'ice_cream',
          calories: '237',
          fat: '9.0',
          comment: 'Super Tasty'
        }, {
          dessert: 'Eclair',
          type: 'pastry',
          calories: '262',
          fat: '16.0',
          comment: ''
        }, {
          dessert: 'Cupcake',
          type: 'pastry',
          calories: '305',
          fat: '3.7',
          comment: ''
        }, {
          dessert: 'Gingerbread',
          type: 'other',
          calories: '356',
          fat: '16.0',
          comment: ''
        }]
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
