let searchWord = 'health';
let newst = 'publishedAt';
var search='';

let categories = 'News';
document.getElementById('titleID').innerHTML=categories;

//let S=document.getElementById('searchWordId').innerHTML;

document.getElementById("searchWordBtn").addEventListener("click", function() {
     search=document.getElementById('searchWordId').value;
  //  alert(search);
});

console.log(search);





const fetchPromise = fetch(`https://newsapi.org/v2/top-headlines?category=${searchWord}&apiKey=2f1bb7244f434f6daa18bf4fc36274d6`);
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


//-------side ----weather-------
const fetchPromiseWeather = fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=da7e2148cfed42bbaf76dd2251b17c8c&include=minutely`);

   // const fetchPromiseWeather = fetch(`https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=da7e2148cfed42bbaf76dd2251b17c8c&include=minutely`);
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
            <div class="card-footer"><h6>${element.datetime}</h6></div>
          </div>`).join('');
          

    });



//-----check 2----------------------


//-------nav categories----Sports-------
document.getElementById("sportBtn").addEventListener("click", function () {
    let categories = 'sports';
    document.getElementById('titleID').innerHTML=categories;
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
});
//-----technology--------
document.getElementById("technologyBtn").addEventListener("click", function () {
    let categories = 'technology';
    document.getElementById('titleID').innerHTML=categories;
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
});
//
//-------nav categories----health-------
document.getElementById("healthBtn").addEventListener("click", function () {
    let categories = 'health';
    document.getElementById('titleID').innerHTML=categories;
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
});

//-------nav categories----general-------
document.getElementById("generalBtn").addEventListener("click", function () {
    let categories = 'general';
    document.getElementById('titleID').innerHTML=categories;
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
});

//-------nav categories----science-------
document.getElementById("scienceBtn").addEventListener("click", function () {
    let categories = 'science';
    document.getElementById('titleID').innerHTML=categories;
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
});
//
//-------nav categories----entertainment-------
document.getElementById("entertainmentBtn").addEventListener("click", function () {
    let categories = 'entertainment';
    document.getElementById('titleID').innerHTML=categories;
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
});
//-------nav categories----business-------
document.getElementById("businessBtn").addEventListener("click", function () {
    let categories = 'business';
    document.getElementById('titleID').innerHTML=categories;
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
});
