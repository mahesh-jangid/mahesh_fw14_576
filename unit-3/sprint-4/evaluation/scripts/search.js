function storeSearchterm(term) {
  try {
    let res = await fetch(term);

    let data = await res.json();

    let response = data.articles;

    return response;
  } catch (err) {
    console.log(err);
  }
}

export default storeSearchterm;
