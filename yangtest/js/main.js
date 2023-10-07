const today = new Date();

const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();

const formattedDate = `${year}-${month}-${day}`;

document.querySelector("img").style.display = "block";
let apiKey = "4oH3GPy5HI6hdnCOPcdOLMOKmgwBVTJrwdvrvteK";
let apiURL = "https://api.nasa.gov/planetary/apod";
let date = formattedDate;

fetch(`${apiURL}?api_key=${apiKey}&date=${date}`)
 .then((res) => res.json())
 .then((data) => {
   console.log(data);
   document.querySelector("h2").innerText = data.title;
   document.querySelector("img").src = data.hdurl;
   document.querySelector("h3").innerText = data.explanation;
 })
 .catch((err) => {
   console.log(`error ${err}`);
});

