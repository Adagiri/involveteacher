import axios from "axios";

let url = "https://api.involveteacher.space/v2/topic";
export const fetchTopics = (token) => {
   console.log(token)
   axios.get(url, {
      headers: {
         'token': token
       }
    })
    .then((res => {
      console.log(res);
   }))
   .catch(err => {
      console.log(err);
   })
};