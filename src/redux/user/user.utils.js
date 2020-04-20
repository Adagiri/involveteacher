import axios from "axios";

export const updateProfile = (payload, token) =>  {
  return axios({
    method: 'post',
    url: 'https://api.involveteacher.space/public/v2/update_info',
    data: payload,
    headers: {
      'auth-token': token
    }
  }).then(data => console.log(data))
  .catch(err => console.log(err))
}
export const fetchProfile = (token) =>    
axios({
  method: 'get',
  url: 'https://api.involveteacher.space/public/v2/account',
  headers: {
    'auth-token': token
  }
})