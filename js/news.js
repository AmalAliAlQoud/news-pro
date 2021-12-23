var search = '';
let lat;
let lon;

let categories = 'general';
reunNews();

//-------side ----weather-------
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    var fetchPromiseWeather = fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=da7e2148cfed42bbaf76dd2251b17c8c&include=minutely`);
    fetchPromiseWeather.then(response => {
        return response.json();
    }).then(response => {
        console.log(response.data);
        document.getElementById('weatherId').innerHTML = response.data.map(element =>
            `<div class="card">
         <div class="card-header">
           <h5>${element.city_name}</h5>
         </div>
         <div class="card-body">
           <h6>${element.weather.description}</h6>
           <span></span>
           <h2>${element.temp}°</h2>
         </div>
         <div class="card-footer"><small>${element.datetime}</small></div>
       </div>`).join('');
    });
}



//---------search-------------------------------
document.getElementById("searchWordBtn").addEventListener("click", (e) => {
    e.preventDefault();
    search = document.getElementById('searchWordId').value;
    document.getElementById('titleID').innerHTML = 'your search result about ' + search;
    console.log(search);
    const fetchPromise = fetch(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=2f1bb7244f434f6daa18bf4fc36274d6`);
    fetchPromise.then(response => {
        return response.json();
    }).then(response => {
        console.log(response.articles);
        document.getElementById('news').innerHTML = response.articles.map(element =>
            `<div class="card m-1" style="width: 16rem;">
    <img src="${element.urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 id="cardTitle" class="card-title">${element.title}</h5>
      <p id="cardBody" class="card-text">${element.description}</p>
    </div>
    <a href="${element.url}" class="card-footer">view detail</a>
    </div>`).join('');
    });
});



const navBtn = document.querySelectorAll(".ABC");
for (let i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener("click", function () {
        if (i == 0)
            categories = 'general';
        if (i == 1)
            categories = 'health';
        if (i == 2)
            categories = 'sports';
        if (i == 3)
            categories = 'science';
        if (i == 4)
            categories = 'business';
        if (i == 5)
            categories = 'entertainment';
        if (i == 6)
            categories = 'technology';
        reunNews();

    });
}


function reunNews() {
    document.getElementById('titleID').innerHTML = categories;
    const fetchPromise = fetch(`https://newsapi.org/v2/top-headlines?category=${categories}&apiKey=2f1bb7244f434f6daa18bf4fc36274d6`);
    fetchPromise.then(response => {
        return response.json();
    }).then(response => {
        console.log(response.articles);
        document.getElementById('news').innerHTML = response.articles.map(element =>
            `<div class="card m-1" style="width: 16rem;">
    <img src="${element.urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 id="cardTitle" class="card-title">${element.title}</h5>
      <p id="cardBody" class="card-text">${element.description}</p>
    </div>
    <a href="${element.url}" class="card-footer">view detail</a>
    </div>`).join('');

    });
}

