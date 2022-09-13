import * as info from "./index.js"

// Shop Products 

const getProducts = async () => {
  let response = await fetch(`${info.backend_path}/products/`)
  let data = await response.json();
  console.log("get data", data);
  sessionStorage.products = JSON.stringify(data)
  if (data.length > 1) {
    document.querySelector('#product_count').innerHTML = `${data.length} - Produkte werden angezeigt`
  } else if (data.length === 1) {
    document.querySelector('#product_count').innerHTML = `${data.length} - Produkt werden angezeigt`
  } else {
    document.querySelector('#product_count').innerHTML = `0 - Produkt werden angezeigt`
  }
  return data
}

const handleProducts = (selectValue, text) => {
  console.log(selectValue);
  let shopFrom = document.querySelector("#shopForm")
  shopFrom.innerHTML = ""
  getProducts()
    .then((products) => {
      products.sort(function (a, b) {
        if (text.includes('low to high')) {
          return a[selectValue] - b[selectValue];
        } else if (text.includes('high to low')) {
          return b[selectValue] - a[selectValue];
        } else {
          return a[selectValue] - b[selectValue];
        }
      })
      products.forEach(item => {
        let product = `<div class="col-lg-3 col-md-5">
                        <div class="product mb-40">
                            <div class="product__img">
                                <a href="shop-details.html?id=${item.id}"><img src="${info.backend_path}${item.image1}" alt="${item.image1}"></a>
                                <div class="product-action text-center">
                                    <a href="shop-details.html?id=${item.id}">Add Cart</a>
                                </div>
                            </div>
                            <div class="product__content text-center pt-30">
                                <span class="pro-cat"><a href="#">${item.title1}</a></span>
                                <h4 class="pro-title"><a href="shop-details.html?id=${item.id}">${item.title2}</a>
                                </h4>
                                <div class="price">
                                    <span>€${item.price1}</span>
                                    <span class="old-price">€${item.price2}</span>
                                </div>
                            </div>
                        </div>
                    </div>`

        shopFrom.innerHTML += product
        // console.log(item);
      });
    })
}

let e = document.getElementById("selectSection");
function onChange() {
  let value = e.value;
  let text = e.options[e.selectedIndex].text;
  console.log(value, text);
  handleProducts(value, text)
}
e.onchange = onChange;

onChange()

