import axios from "axios";

let url = "https://api.involveteacher.space/v2/topic";
export const fetchTopics = (token) => {
   console.log(token);

   return fetch('https://api.involveteacher.space/v2/topic', {
      method: 'GET',
      
      headers: {
        'token': token
      }
    })
    .then((res) => console.log(res.json()))
    .catch((err)=> console.log(err));
  
};



   // axios.get(url, {
   //    headers: {
   //       'token': token
   //     }
   //  })
   //  .then((res => {
   //    console.log(res);
   // }))
   // .catch(err => {
   //    console.log(err);
   // })
   
 