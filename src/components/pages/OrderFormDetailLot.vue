<template>
<div>
  <mu-text-field label="Lot" hintText="Lot" v-model="form.lot"/>
  <mu-text-field label="国别" hintText="国别" v-model="form.country"/>
  <mu-date-picker label="交期" container="inline" hintText="交期"
    v-model="form.deliver"
    autoOk/> <br/>

  <mu-tabs :value="activeTab">
    <mu-tab value="tab1" title="颜色尺码"/>
  </mu-tabs>
  <div v-if="activeTab === 'tab1'">
    <mu-table ref="table" :showCheckbox="showCheckbox">
      <mu-thead>
        <mu-tr>
          <mu-th>ID</mu-th>
          <mu-th>Name</mu-th>
        </mu-tr>
      </mu-thead>
      <mu-tbody>
        <mu-tr>
          <mu-td><mu-text-field hintText="颜色" v-model="form.lot"/></mu-td>
          <mu-td><mu-text-field hintText="尺码" v-model="form.country"/></mu-td>
        </mu-tr>
        <mu-tr>
          <mu-td><mu-text-field hintText="颜色" v-model="form.lot"/></mu-td>
          <mu-td><mu-text-field hintText="尺码" v-model="form.country"/></mu-td>
        </mu-tr>
      </mu-tbody>
    </mu-table>
  </div>

  <div slot="footer" class="dialog-footer">
    <mu-flat-button label="取 消" class="demo-flat-button"
      @click="cancel"/>
    <mu-raised-button label="确 定" class="demo-raised-button" primary
      @click="confirm"/>
    <mu-raised-button label="确认并添加" class="demo-raised-button"
      @click="confirmAdd"/>
      <mu-flat-button label="上一步" class="demo-flat-button"
        @click="previous"/>
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
        formLabelWidth: '120px',
        nutrition: [
          {
            dessert: 'Frozen yogurt',
            type: 'ice_cream',
            calories: '159',
            fat: '6.0',
            comment: 'Icy'
          },
          {
            dessert: 'Ice cream sandwich',
            type: 'ice_cream',
            calories: '237',
            fat: '9.0',
            comment: 'Super Tasty'
          },
          {
            dessert: 'Eclair',
            type: 'pastry',
            calories: '262',
            fat: '16.0',
            comment: ''
          },
          {
            dessert: 'Cupcake',
            type: 'pastry',
            calories: '305',
            fat: '3.7',
            comment: ''
          },
          {
            dessert: 'Gingerbread',
            type: 'other',
            calories: '356',
            fat: '16.0',
            comment: ''
          }
        ]
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
