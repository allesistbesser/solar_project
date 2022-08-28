// Shop Products 

const getProducts = async () =>{
  let response = await fetch('http://127.0.0.1:8000/products/')
  let data = await response.json();
  console.log("get data",data); 
  return data
}

let shopFrom = document.querySelector("#shopForm")
getProducts()
.then((products)=>{
  products.forEach( item => {
  let product = `<div class="col-lg-4 col-md-6">
                        <div class="product mb-40">
                            <div class="product__img">
                                <a href="shop-details.html"><img src="http://127.0.0.1:8000${item.image1}" alt="${item.image1}"></a>
                                <div class="product-action text-center">

                                    <a href="shop-details.html">Add Cart</a>

                                </div>
                            </div>
                            <div class="product__content text-center pt-30">
                                <span class="pro-cat"><a href="#">${item.title1}</a></span>
                                <h4 class="pro-title"><a href="shop-details.html">${item.title2}</a>
                                </h4>
                                <div class="price">
                                    <span>$${item.price1}</span>
                                    <span class="old-price">$${item.price2}</span>
                                </div>
                            </div>
                        </div>
                    </div>`
  
shopFrom.innerHTML += product
console.log(item);
});

})


