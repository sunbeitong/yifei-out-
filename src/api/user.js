import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/Base_Manage/Home/SubmitLogin',
    method: 'post',
    data
  })
}


export function getInfo (token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function get_userlist (data) {
  return request({
    url: '/Test_Table/base_userstate/GetDataList',
    method: 'post',
    data
  })
}
export function get_user (data) {
  return request({
    url: '/Test_Table/base_userstate/GetJoinData',
    method: 'post',
    data
  })
}


