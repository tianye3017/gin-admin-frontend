import request from '@/utils/request'

export function requestList(query) {
  return request({
    url: '/menu',
    method: 'get',
    params: query
  })
}

export function requestAll() {
  return request({
    url: '/menu/all',
    method: 'get'
  })
}

export function requestDetail(id) {
  return request({
    url: '/menu',
    method: 'get',
    params: { id }
  })
}

export function requestUpdate(data) {
  return request({
    url: '/menu',
    method: 'put',
    data
  })
}

export function requestCreate(data) {
  return request({
    url: '/menu',
    method: 'post',
    data
  })
}

export function requestDelete(data) {
  return request({
    url: '/menu',
    method: 'delete',
    data
  })
}

export function requestMenuButton(menucode) {
  return request({
    url: '/menu/menubuttonlist',
    method: 'get',
    params: { menucode }
  })
}

