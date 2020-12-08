<template>
  <div class="table-box">
    <div class="table-top">
      <p class="table-title"
         v-if="title">{{title}}</p>
      <p class="title-center">
        <slot name="title-center"></slot>
      </p>
      <div class="right-btns">
        <slot name="right-btns"></slot>
        <!-- <el-button type="primary"
                   class="field-set-btn">列表字段设置</el-button>
        <el-button class="add-btn">新增</el-button>
        <el-button class="export-btn">导出</el-button>
        <el-button class="import-btn">导入</el-button> -->
      </div>
    </div>
    <div class="table-main">
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column v-for="(column,index) of columns"
                         :key="index"
                         :prop="column.prop"
                         :align='column.align||"center"'
                         :label="column.label"
                         :width="column.width">
          <template slot-scope="scope">
            <slot v-if="column.slot"
                  :row="scope.row"
                  :name="column.slot"
                  :index="scope.$index"></slot>
            <span v-else>
              {{ scope.row[column.prop]?scope.row[column.prop]:'- -' }}
            </span>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagenation"
           v-if="!isNull(pagination)">
        <el-pagination background
                       :page-size="pagination.pageSize||20"
                       layout="prev, pager, next"
                       :total="pagination.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    tableData: {
      type: Array,
      default() {
        return []
      }
    },
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    pagination: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    isNull(obj) {
      return Object.keys(obj).length === 0
    }
  }
}
</script>

<style lang='scss'>
@import '@/styles/mixin.scss';
.search-btn {
  @include default-btn;
  @include search-btn;
}
.table-box {
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #e9e9e9;
  .table-top {
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid #e3e3e3;
    .table-title {
      font-size: 18px;
      color: #666;
    }
    .title-center {
      flex: 1;
      text-align: right;
      padding: 0 40px;
      color: #e98138;
    }
    .field-set-btn {
      @include field-set-btn;
    }
    .add-btn {
      @include add-btn;
    }
    .export-btn {
      @include export-btn;
    }
    .import-btn {
      @include import-btn;
    }
    .download-btn {
      @include download-btn;
    }
  }
  .table-main {
    padding: 20px;
  }
  .pagenation {
    margin-top: 30px;
    text-align: center;
    .el-pagination.is-background .btn-next,
    .el-pagination.is-background .btn-prev,
    .el-pagination.is-background .el-pager li {
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.15);
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active {
      color: #206bfe;
      border-color: #206bfe;
    }
    .el-pagination.is-background .el-pager li:not(.disabled):hover {
      color: #206bfe;
    }
  }
}
</style>