const fetch = require('node-fetch');

fetch('https://pokeapi.co/api/pokemon/')
 .then(function(response) {
   return response.json();
 })
 .then(function(myJson) {
   console.log(myJson);
 })
 .catch( (err)=> {
     console.log("ERROR", err)
 })
 ;