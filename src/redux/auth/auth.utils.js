import axios from "axios";

export const registerUser = (data) => {
    axios({
        method: 'post',
        url: 'https://api.involveteacher.space/v2/register',
        data
      }).then((res => {
         console.log(res.data.data);
      }))
      .catch(err => {
         console.log(err);
      })
};