let searchWord='entertainment';
const fetchPromise = fetch(`https://newsapi.org/v2/top-headlines?category=${searchWord}&apiKey=541a5e1c85454906a78a09eaf0cc38cb`);
fetchPromise.then(response => {
return response.json();
}).then(response => {
console.log(response.articles);
document.getElementById('news').innerHTML= response.articles.map(element =>
` <div class="card m-1" style="width: 16rem;">
<img src="${element.urlToImage}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 id="cardTitle" class="card-title">${element.title}</h5>
  <p id="cardBody" class="card-text">${element.description}</p>
</div>
<a href="${element.url}" class="card-footer">view detail</a>
</div>`).join('');

});