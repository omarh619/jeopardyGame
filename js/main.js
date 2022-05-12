/* //Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://tasty.p.rapidapi.com/recipes/auto-complete`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
       
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

 */
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
  params: {prefix: 'chicken soup'},
  headers: {
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    'X-RapidAPI-Key': 'ecfaf641b1mshbcb3a19f2596ac1p129194jsn15f4c1cbbb96'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});