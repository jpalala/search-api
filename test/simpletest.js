/* run app, then run this */
'use strict';
const axios = require('axios');

axios.get('http://localhost:3000/?q=g5400').then((response) => {
  console.log(response.data);
}).catch(function(err) {
  console.log(err);
});
