async function apiCall(url) {
  //add api call logic here
  try {
    let res = await fetch(url);

    let data = await res.json();

    let response = data.articles;
    console.log(data);

    return response;
  } catch (err) {
    console.log(err);
  }
}

function appendArticles(articles, main) {
  articles.forEach((article) => {
    // for (var i = 0; i < article.length; i++) {
    let div = document.createElement("div");
    let html = ` <div class="news_cont">
          <div class="title">${article.title}</div>
          <div class="desc">${article.description}</div>
          <div class="img">
            <img src="${article.image}" alt="" />
          </div>
        </div>`;

    div.insertAdjacentHTML("afterbegin", html);
    main.append(div);
    console.log(main);
    // }
  });
}

export { apiCall, appendArticles };
