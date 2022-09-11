import * as info from "./index.js"

// add firma infos
document.querySelector("#mail1").innerHTML = info.mail
document.querySelector("#mail2").innerHTML = `<a href="mailto:${info.mail}">${info.mail}</a>
<br>`
document.querySelector("#mail3").innerHTML = `<a href="mailto:${info.mail}">${info.mail}</a>`
document.querySelector("#adres1").innerHTML = info.adres
document.querySelector("#adres2").innerHTML = info.adres
document.querySelector("#phone1").innerHTML = info.phone
document.querySelector("#phone2").innerHTML = info.phone

// title
document.getElementsByTagName("title")[0].innerHTML = info.title

// add social meida top
document.querySelector("#social_media_top").innerHTML = `<a href="${info.facebook}" title="Facebook"><i class="fab fa-facebook white-color"></i></a>
<a href="${info.twitter}" title="Twitter"><i class="fab fa-twitter white-color"></i></a>
<a href="${info.linkedin}" title="LinkedIn"><i class="fab fa-linkedin-in white-color"></i></a>`
//add copyright
document.querySelector(".copyright-wrap").innerHTML =`
<div class="container">
<div class="row align-items-center">
    <div class="col-lg-6">
    Copyright © 2022 MINI SOLAR COMPANY All rights reserved
    </div>
    <div class="col-lg-6 text-right text-xl-right">
        <ul>
            <li> <span class="footer-social" id="social_media_bottom">
                </span>
            </li>
        </ul>
    </div>

</div>
</div>
`
// add socila meida bottom
document.querySelector("#social_media_bottom").innerHTML = `<a href="${info.facebook}"><i class="fab fa-facebook-f"></i></a>
<a href="${info.twitter}"><i class="fab fa-twitter"></i></a>
<a href="${info.instagram}"><i class="fab fa-instagram"></i></a>`

//add favicon
let links = document.querySelectorAll("link")
links.forEach(item => {
    if (item.type === "image/x-icon"){
        item.href =info.favicon
    }
});

// add meta content
document.querySelector("head").innerHTML += `<meta name="keywords" content="">`

let metaKewwords = document.querySelectorAll("meta")
metaKewwords.forEach(item => {
    if (item.name == "keywords") {item.content = info.metaContent}
});

