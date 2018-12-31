import request from '@/utils/request';

export default {
  fetch(payload){
    return request('/mock_product', payload)
  },
}
