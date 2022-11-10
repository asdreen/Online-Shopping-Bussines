const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZkMGE2N2Q0YmUzZDAwMTU4NDYwYjIiLCJpYXQiOjE2NjgwOTQzOTEsImV4cCI6MTY2OTMwMzk5MX0.zpemWtrH7IWodDdlRrxwJwjUVtId5KozvAS3tHgkPl0",
  },
};

async function getProducts() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    options
  );
  const products = await response.json();
  console.log(products);
  return products;
}

function renderProducts(listOfProducts) {
  let cards = document.querySelector(".card-container");

  listOfProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
    <div class="card-body">
      <h4 class="card-text text-center">${product.name}</h4>
      <p class="card-text text-center">${product.description}</p>
      <a href="details.html?productId=${product._id}">VIEW DETAILS</a>
    </div>     
  </div>`;

    cards.appendChild(productCard);
  });
}
window.onload = async () => {
  const products = await getProducts();
  renderProducts(products);
};
