<template>
  <div>
    <page-title title="abc">
      <el-button type="primary"
                 size="mini"
                 class="refresh-btn"
                 icon="el-icon-refresh-right">刷新</el-button>
    </page-title>

    <ele-search :formParams='formParams'
                :forms='forms' />

    <ele-table-pagination title="查询结果"
                          :columns='columns'
                          :tableData='tableData'
                          :pagination='pagination'>
      <!-- 表格头部 -->
      <span slot="title-center">总数量：214箱</span>
      <template slot='right-btns'>
        <el-button class="download-btn">下载模板</el-button>
        <el-button class="import-btn">导入</el-button>
        <el-button type="primary"
                   class="field-set-btn">列表字段设置</el-button>
        <el-button class="add-btn">新增</el-button>
        <el-button class="export-btn">导出</el-button>
      </template>

      <!-- 状态 -->
      <template slot='state'
                slot-scope="{state}">
        <span v-if="state">收集中</span>
        <span v-else
              class="redColor">已停用</span>
      </template>
      <!-- 操作 -->
      <template slot='handle'
                slot-scope="row">
        <span class="handleClumn">
          <el-button type="text"
                     size="small">编辑</el-button>
          <el-button type="text"
                     size="small">删除</el-button>
        </span>
      </template>
    </ele-table-pagination>

  </div>
</template>

<script>
import { get_userlist, get_user } from '@/api/user.js'
export default {
  data() {
    return {
      formParams: {
        ognan: '',
        driver: '',
        carcode: '',
        position: [],
        timeRange: ''
      },
      forms: [
        { type: 'input', label: '产废机构', field: 'ognan' },
        { type: 'input', label: '司机姓名', field: 'driver' },
        {
          type: 'select',
          label: '车牌号',
          field: 'carcode',
          options: [
            { value: '12345', label: '京A12345' },
            { value: '37890', label: '京B67890' }
          ]
        },
        {
          type: 'cascader',
          label: '对应位置',
          field: 'options',
          options: [
            {
              value: '1',
              label: '位置一',
              children: [
                {
                  value: '1-1',
                  label: '位置一 上'
                },
                {
                  value: '1-2',
                  label: '位置一 下'
                }
              ]
            },
            {
              value: '2',
              label: '位置二',
              children: [
                {
                  value: '2-1',
                  label: '位置二 上'
                },
                {
                  value: '2-2',
                  label: '位置二 下'
                }
              ]
            }
          ]
        },
        {
          type: 'datetimerange',
          label: '最后使用时间',
          field: 'timeRange',
          pickerOptions: true
        }
      ],
      columns: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '姓名' },
        { prop: 'address', label: '地址' },
        { label: '状态', slot: 'state' },
        { label: '操作', slot: 'handle' }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          state: 0
        }
      ],
      pagination: {
        pageSize: 15,
        total: 100
      }
    }
  },
  methods: {}
}
</script>

<style lang='scss'>
@import '@/styles/mixin.scss';
.refresh-btn {
  @include default-btn;
  @include refresh-btn;
}
</style>