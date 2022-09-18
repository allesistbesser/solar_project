import * as info from "./index.js"

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

let backend_path = info.backend_path
let products = JSON.parse(sessionStorage.products)

products.forEach(item=>{
  if (item.id == id){
    console.log(item);
    document.querySelector("#home-tab").innerHTML = `<img src=${backend_path}${item.image1} alt=""></img>`;
    document.querySelector("#profile-tab").innerHTML = `<img src=${backend_path}${item.image2} alt="">`;
    document.querySelector("#profile-tab2").innerHTML = `<img src=${backend_path}${item.image3} alt="">`;
    document.querySelector("#home").innerHTML = `<div class="product-large-img">
    <img src=${backend_path}${item.image1} alt=""></div>`;
    document.querySelector("#profile").innerHTML = `<div class="product-large-img">
    <img src=${backend_path}${item.image2} alt=""></div>`;
    document.querySelector("#profile1").innerHTML = `<div class="product-large-img">
    <img src=${backend_path}${item.image3} alt=""></div>`;
    document.querySelector("#title1").innerHTML = `${item.title1}`;
    document.querySelector("#title2").innerHTML = `${item.title2}`;
    document.querySelector("#price1").innerHTML = `€${item.price1}`;
    document.querySelector("#price2").innerHTML = `${item.price2 === null ? "": "€"+item.price2}`;
    document.querySelector("#content").innerHTML = `${item.content}`;
    document.querySelector("#category").innerHTML = `${item.category}`;
    document.querySelector("#installation").innerHTML = `${item.installation}`;
    document.querySelector("#dimensions").innerHTML = `${item.dimensions}`;
   
  }
})

