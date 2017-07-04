<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
          <el-input
            placeholder="请输入"
            icon="search"
            v-model="input2"
            :on-icon-click="handleIconClick">
          </el-input>
           <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane  label="模块" name="moudle">
              <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
                <el-menu-item-group title="分组一">
                  <el-menu-item index="1"><i class="el-icon-message"></i>导航一<i class="el-icon-star-off collect-icon"></i></el-menu-item>
                  <el-menu-item index="2"><i class="el-icon-message"></i>导航二<i class="el-icon-star-off collect-icon"></i></el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组二">
                  <el-menu-item index="3"><i class="el-icon-message"></i>导航三<i class="el-icon-star-off collect-icon"></i></el-menu-item>
                  <el-menu-item index="4"><i class="el-icon-message"></i>导航四<i class="el-icon-star-off collect-icon"></i></el-menu-item>
                </el-menu-item-group>
              </el-menu>
            </el-tab-pane>
            <el-tab-pane  label="收藏" name="collect">收藏</el-tab-pane>
        </el-tabs>
        </el-menu>
        <el-select class="select" v-model="value" placeholder="请选择子系统" @change="changBySubSysytem">
            <el-option
              v-for="item in subSystemList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          items: [{
            icon: 'el-icon-setting',
            index: 'home',
            title: '自述'
          }, {
            icon: 'el-icon-date',
            index: '2',
            title: '表单',
            subs: [{
              index: 'baseform',
              title: '基本表单'
            }, {
              index: 'vueeditor',
              title: '编辑器'
            }, {
              index: 'markdown',
              title: 'markdown'
            }, {
              index: 'upload',
              title: '文件上传'
            }]
          }, {
            icon: 'el-icon-menu',
            index: '3',
            title: '表格',
            subs: [{
              index: 'OrderList',
              title: '订单'
            }, {
              index: 'Table1',
              title: '记录展示'
            }, {
              index: 'OrderForm',
              title: '订单表'
            }, {
              index: 'vuetable',
              title: 'Vue表格组件'
            }]
          }, {
            icon: 'el-icon-star-on',
            index: 'basecharts',
            title: '图表'
          }, {
            icon: 'el-icon-upload2',
            index: 'drag',
            title: '拖拽'
          }
          ],
          subSystemList: [
            {
              value: 'subSystem1',
              label: '子系统1'
            },
            {
              value: 'subSystem2',
              label: '子系统2'
            },
            {
              value: 'subSystem3',
              label: '子系统3'
            }
          ],
          value: '',
          activeName: 'moudle',
          input2: ''
        }
      },
      computed: {
        onRoutes () {
          return this.$route.path.replace('/', '')
        }
      },
      methods: {
        changBySubSysytem (subSystem) {
          console.log(subSystem)
        },
        handleClick (tab, event) {
          console.log(tab, event)
        },
        handleIconClick (ev) {
          console.log(ev)
        }
      }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
    .select{
      position:fixed;
      bottom:0;
      width:246px;
      left:2px;
    }
    .el-icon-plus{
      right:0px;
    }
    .collect-icon{
      position:absolute;
      top:21px;
      right:0px;
    }
</style>
