import request from '../utils/request';
import { PAGE_SIZE } from '../constants'

// 获取数据
export function fetch({ page }) {
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}

// 删除
export function remove(id) {
  // console.log('service remove')
  return request(`/api/users/${id}`,{
    method: 'DELETE'
  });
}

// 编辑
export function patch(id, values){
  return request(`/api/users/${id}`,{
    method: 'PATCH',
    body: JSON.stringify(values)
  })
}

// 新增
export function create(values){
  return request(`/api/users`,{
    method: 'POST',
    body: JSON.stringify(values)
  })
}