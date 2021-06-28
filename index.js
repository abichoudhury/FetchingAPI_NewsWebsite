// api key : 2004cb0fa5ad4b44a7c17a40a4fd47b7

console.log("This is index JS file")

// Grab the news container
newsAccordian = document.getElementById('newsAccordian');

// Create an ajax GET request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?token=024273f3b5411785805a342e020b1af8&lang=en`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
         //console.log(articles);
        let newshtml = "";
        articles.forEach(function (element, index) {
            let news = ` <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                           ${element["title"]}
                         </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">${element["content"]}. <a href="${element["url"]}" target="_blank">Read more here</a>
                        </div>
                        </div>
                        </div>
                        `
            newshtml += news;
        });
        newsAccordian.innerHTML = newshtml;
    }
    else {
        console.log('some error occured')
    }
}

xhr.send();

/*
` <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           ${element["title"]}
                         </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">${element["content"]}. <a href="${element["url"]}" target="_blank">Read more here</a>
                        </div>
                        </div>
                        </div>
                        `
*/