import axios from "axios";

export const fetchTopics = () => {
  console.log('yay')
  axios.get("http://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data))
  .catch(err => console.log(err))
};


// let url = "https://api.involveteacher.space/v2/topic";
// export const fetchTopics = async (token) => {
//    // Default options are marked with *
//    const response = await fetch(url, {
//      method: 'GET', // *GET, POST, PUT, DELETE, etc.
//      mode: 'cors', // no-cors, *cors, same-origin
//      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//      credentials: 'same-origin', // include, *same-origin, omit
//      headers: {
//        'token': token
//        // 'Content-Type': 'application/x-www-form-urlencoded',
//      },
//      redirect: 'follow', // manual, *follow, error
//      referrerPolicy: 'no-referrer', // no-referrer, *client
//    //   body: JSON.stringify(data) // body data type must match "Content-Type" header
//    });
//    return await response.json(); // parses JSON response into native JavaScript objects
//  }
 
// //  postData('https://example.com/answer', { answer: 42 })
// //    .then((data) => {
// //      console.log(data); // JSON data parsed by `response.json()` call
// //    });



//    // axios.get(url, {
//    //    headers: {
//    //       'token': token
//    //     }
//    //  })
//    //  .then((res => {
//    //    console.log(res);
//    // }))
//    // .catch(err => {
//    //    console.log(err);
//    // })
   
 