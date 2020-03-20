import request from '@/utils/request'

export function requestEditPwd(data) {
  return request({
    url: '/user/editpwd',
    method: 'post',
    data
  })
}

export function requestEditDetail(data) {
  return request({
    url: '/user/editinfo',
    method: 'post',
    data
  })
}
