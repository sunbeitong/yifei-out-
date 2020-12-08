import PageTitle from './PageTitle'
import EleSearch from './ele-search-table/ele-search'
import EleTablePagination from './ele-search-table/ele-table-pagination'
const globleCmp = {
  install (Vue) {
    Vue.component('PageTitle', PageTitle)
    Vue.component('EleSearch', EleSearch)
    Vue.component('EleTablePagination', EleTablePagination)
  }
}
export default globleCmp