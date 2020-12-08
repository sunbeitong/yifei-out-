<template>
  <div class="search-form-box">
    <h3 class="search-title">检索</h3>
    <el-form :inline="true"
             ref="searchForm"
             :model="formParams"
             class="search-form">
      <el-form-item v-for="(form,i) of forms"
                    :prop="form.field"
                    :key="i"
                    :label="form.label">
        <!-- 文本框 -->
        <el-input v-if="form.type=='input'"
                  v-model="formParams[form.field]"
                  :placeholder="form.label"></el-input>
        <!-- Select 选择器 -->
        <el-select v-if="form.type=='select'"
                   filterable
                   v-model="formParams[form.field]"
                   :placeholder="form.label">
          <el-option v-for="(option,j) of form.options"
                     :key="j"
                     :label="option.label"
                     :value="option.value"></el-option>
        </el-select>
        <!-- Cascader 级联选择器 -->
        <el-cascader v-if="form.type=='cascader'"
                     v-model="formParams[form.field]"
                     :placeholder="form.label"
                     :options="form.options"></el-cascader>
        <!-- DateTimePicker 日期时间选择器 -->
        <el-date-picker v-if="form.type=='datetimerange'"
                        v-model="formParams[form.field]"
                        type="datetimerange"
                        :picker-options="form.pickerOptions && pickerOptions"
                        range-separator="⇀"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['00:00:00', '23:59:59']">
        </el-date-picker>
      </el-form-item>

      <div class="btn-box">
        <el-button type="primary"
                   class="search-btn"
                   @click="search">查询</el-button>
        <el-button class="reset-btn"
                   @click="resetForm('searchForm')">重置</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { pickerOptions } from '@/utils/options'
export default {
  props: {
    formParams: {
      type: Object,
      default() {
        return {}
      }
    },
    forms: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      pickerOptions
    }
  },
  methods: {
    search() {},
    resetForm(formName) {
      this.$refs[formName].resetFields()
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
.reset-btn {
  @include reset-btn;
}
.search-form-box {
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #e9e9e9;
  min-width: 1160px;
  margin-bottom: 20px;
}
.search-title {
  padding: 0 20px;
  line-height: 45px;
  font-size: 18px;
  border-bottom: 1px solid #e3e3e3;
  color: #666;
}
.search-form {
  padding: 20px;
  height: 124px;
  box-sizing: border-box;
  position: relative;
  .btn-box {
    height: 32px;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
}
</style>