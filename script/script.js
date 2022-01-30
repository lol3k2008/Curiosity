const date = document.querySelector(`.date`);
const curiosity = document.querySelector(`.curiosity`)
const currentTime = document.querySelector(`.current-time`);
const getDay = new Date().getDay();


const dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

date.textContent = dayOfWeek[getDay];

const url =  `https://uselessfacts.jsph.pl//random.json?language=en`;

fetch(url)
  .then(response => response.json())
 .then(data => curiosity.textContent = data.text);
  
const time = () =>{
   const getDate = new Date(); 
const hour = getDate.getHours();
const minutes = getDate.getMinutes();
const second = getDate.getSeconds();
if(minutes < 10) {
  currentTime.textContent = `${hour}:0${minutes}:${second}`;
} else if (second <10 ){
  currentTime.textContent = `${hour}:${minutes}:0${second}`;
} else{
  currentTime.textContent = `${hour}:${minutes}:${second}`; 
}}

setInterval(time, 1000);
