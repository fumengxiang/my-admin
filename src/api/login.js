import { request } from '@/utils/request.js'

export function login (user) {
  return request({
    url: '/app/v1_0/authorizations',
    method: 'POST',
    data: {
      mobile: user.phone,
      code: user.code
    }
  })
}
