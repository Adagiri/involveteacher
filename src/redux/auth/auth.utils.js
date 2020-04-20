import axios from "axios";

export const registerUser = (data) => axios({
        method: 'post',
        url: 'https://api.involveteacher.space/public/v2/register',
        data
      });

export const loginUser = (data) => axios({
   method: 'post',
   url: 'https://api.involveteacher.space/public/v2/login',
   data
 });

 export const signOut = (token) => {
   return axios.get('https://api.involveteacher.space/public/v2/logout', {
    headers: {
      'auth-token': token
    }
  })
 }