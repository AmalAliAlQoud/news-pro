let searchWord = 'health';
let newst = 'publishedAt';


let categories = 'News';
document.getElementById('titleID').innerHTML=categories;




const fetchPromise = fetch(`https://newsapi.org/v2/top-headlines?category=${searchWord}&apiKey=541a5e1c85454906a78a09eaf0cc38cb`);
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


//-------nav categories----Sports-------
document.getElementById("sportBtn").addEventListener("click", function () {
    let categories = 'sports';
    document.getElementById('titleID').innerHTML=categories;
    const fetchPromise = fetch(`https://newsapi.org/v2/top-headlines?category=${categories}&apiKey=541a5e1c85454906a78a09eaf0cc38cb`);
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
    const fetchPromise = fetch(`https://newsapi.org/v2/top-headlines?category=${categories}&apiKey=541a5e1c85454906a78a09eaf0cc38cb`);
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
    const fetchPromise = fetch(`https://newsapi.org/v2/top-headlines?category=${categories}&apiKey=541a5e1c85454906a78a09eaf0cc38cb`);
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
    const fetchPromise = fetch(`https://newsapi.org/v2/top-headlines?category=${categories}&apiKey=541a5e1c85454906a78a09eaf0cc38cb`);
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
    const fetchPromise = fetch(`https://newsapi.org/v2/top-headlines?category=${categories}&apiKey=541a5e1c85454906a78a09eaf0cc38cb`);
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
    const fetchPromise = fetch(`https://newsapi.org/v2/top-headlines?category=${categories}&apiKey=541a5e1c85454906a78a09eaf0cc38cb`);
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
    const fetchPromise = fetch(`https://newsapi.org/v2/top-headlines?category=${categories}&apiKey=541a5e1c85454906a78a09eaf0cc38cb`);
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
