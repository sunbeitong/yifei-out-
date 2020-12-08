import { parseTime } from './index'

export const pickerOptions = {
  shortcuts: [{
    text: '本日',
    onClick (picker) {
      const end = new Date();
      const start = new Date(parseTime(new Date(), '{y}/{m}/{d}') + ' 00:00:00')
      picker.$emit('pick', [start, end]);
    }
  }, {
    text: '本月',
    onClick (picker) {
      const end = new Date();
      const start = new Date();
      start.setTime(new Date(parseTime(new Date(), '{y}/{m}') + '/01 00:00:00'));
      picker.$emit('pick', [start, end]);
    }
  }, {
    text: '本季',
    onClick (picker) {
      const end = new Date();
      const start = new Date();
      let month = new Date().getMonth() + 1
      let monthPicker = [1, 4, 7, 10]
      var mp;
      monthPicker.forEach((item, i) => {
        if (month >= 10) {
          mp = 10
        } else {
          if (month > item && month < monthPicker[i + 1]) {
            mp = item
          }
        }
      })
      start.setTime(new Date(parseTime(new Date(), '{y}') + `/${mp}/01 00:00:00`));
      picker.$emit('pick', [start, end]);
    }
  }, {
    text: '本年',
    onClick (picker) {
      const end = new Date();
      const start = new Date();
      start.setTime(new Date(parseTime(new Date(), '{y}') + '/01/01 00:00:00'));
      picker.$emit('pick', [start, end]);
    }
  }]
}