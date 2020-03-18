import request from '@/utils/request'

export function requestList(query) {
  return request({
    url: '/role',
    method: 'get',
    params: query
  })
}

export function requestDetail(id) {
  return request({
    url: '/role',
    method: 'get',
    params: { id }
  })
}

export function requestUpdate(data) {
  return request({
    url: '/role',
    method: 'put',
    data
  })
}

export function requestCreate(data) {
  return request({
    url: '/role',
    method: 'post',
    data
  })
}

export function requestDelete(data) {
  return request({
    url: '/role',
    method: 'delete',
    data
  })
}

export function requestRoleMenuIDList(roleid) {
  return request({
    url: '/role/rolemenulist',
    method: 'get',
    params: { roleid }
  })
}

export function requestSetRole(roleid, data) {
  return request({
    url: '/role/setrole',
    method: 'post',
    params: { roleid },
    data
  })
}

export function requestAll() {
  return request({
    url: '/role',
    method: 'get'
  })
}
