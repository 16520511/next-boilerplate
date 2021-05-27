var Axios = require('axios');

function RequestPost(path, payload = {}) {
  return new Promise(resolve => {
    Axios.post(path, payload).then(res => resolve(res))
    .catch(err => console.log(err))
  })
}

function RequestGet(path, params = {}) {
  return new Promise(resolve => {
    Axios.get(path, { params }).then(res => resolve(res))
  })
}

export { RequestPost, RequestGet }