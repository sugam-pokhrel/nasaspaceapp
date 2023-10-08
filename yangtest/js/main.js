function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

const today = new Date();
const formattedTodayDate = formatDate(today);

document.querySelector("img").style.display = "block";

let apiKey = "4oH3GPy5HI6hdnCOPcdOLMOKmgwBVTJrwdvrvteK";
let apiURL = "https://api.nasa.gov/planetary/apod";
let date = formattedTodayDate;

function fetchData(date) {
  fetch(`${apiURL}?api_key=${apiKey}&date=${date}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.code === 404 && data.msg === "No data available for date: " + date) {
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const formattedYesterdayDate = formatDate(yesterday);
        fetchData(formattedYesterdayDate);
      } else {
        console.log(data);
        document.querySelector("h2").innerText = data.title;
        document.querySelector("img").src = data.hdurl;
        document.querySelector("h3").innerText = data.explanation;
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}

fetchData(date);
