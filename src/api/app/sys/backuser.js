import request from '@/utils/request'

export function requestList(query) {
  return request({
    url: '/backuser',
    method: 'get',
    params: query
  })
}

export function requestDetail(id) {
  return request({
    url: '/backuser',
    method: 'get',
    params: { id }
  })
}

export function requestUpdate(data) {
  return request({
    url: '/backuser',
    method: 'put',
    data
  })
}

export function requestCreate(data) {
  return request({
    url: '/backuser',
    method: 'post',
    data
  })
}

export function requestDelete(data) {
  return request({
    url: '/backuser',
    method: 'delete',
    data
  })
}

export function requestUserRoleList(userid) {
  return request({
    url: '/backuser/rolelist',
    method: 'get',
    params: { userid }
  })
}

export function requestSetRole(userid, data) {
  return request({
    url: '/backuser/setrole',
    method: 'put',
    params: { userid },
    data
  })
}
