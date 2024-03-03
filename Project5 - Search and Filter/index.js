(async () => {
  const productContEl = document.getElementById("productCont");
  const searchEl = document.getElementById("searchInput");
  const url = "https://fakestoreapi.com/products";
  const fetchRequest = async () => {
    try {
      const res = await fetch(url);
      return await res.json();
    } catch (error) {
      return error;
    }
  };
  const products = await fetchRequest();

  const generatedProducts = (product) => {
    return `
        <div class="productCard">
            <div class="imageCont">
                <img src="${product.image}" alt="image">
            </div>
            <div class="textcont">
                <h2>
                   ${product.title}
                </h2>
                <p>
                    ${product.description.split(" ").slice(0, 20).join(" ")}
                </p>

                <button>$${product.price}</button>
            </div>
        </div>
        `;
  };

  const renderProducts = (products) => {
    productContEl.innerHTML = "";
    products.forEach((product) => {
      productContEl.innerHTML += generatedProducts(product);
    });
  };

  const checkText = (text, searchText) => {
    return text.toString().toLowerCase().includes(searchText);
  };

  const filterHandler = (event) => {
    const searchText = event.target.value.toLowerCase();

    const filteredProducts = products.filter((product) => {
      return (
        checkText(product.description, searchText) ||
        checkText(product.title, searchText) ||
        checkText(product.price, searchText) ||
        checkText(product.image, searchText)
      );
    });

    renderProducts(filteredProducts);
  };
  searchEl.addEventListener("keyup", filterHandler);
  renderProducts(products);
})();
