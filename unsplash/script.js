let clientID = "O9mjNsTiSWWaJbYmBkVDeMV0bsKHXx8v5EoDKT47Wg0";
let img = document.querySelector("#unsplash");
let link = document.querySelector("#link");
let creator = document.querySelector("#creator");
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;
fetch(endpoint)
.then(function(response) {
 return response.json();
})
.then(jsonData =>  {
    img.src = jsonData.urls.regular;
})
