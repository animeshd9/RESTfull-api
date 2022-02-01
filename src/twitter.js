// const axios = require("axios")
// // const { header } = require("express/lib/request")
// require('dotenv').config
// async function fetchdata (){
// try{
//         const data= await axios.get('https://api.twitter.com/1.1/trends/available.json',{
//             headers : {
//                 'Authorization': `Bearer ${process.env.AUTH}`
//             }
//         })
//         console.log(data)
// }catch(err){
//     console.log(err)
// }
// }

// fetchdata()


var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://jikan1.p.rapidapi.com/season/2018/winter',
  headers: {
    'x-rapidapi-host': 'jikan1.p.rapidapi.com',
    'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});np