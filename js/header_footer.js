import * as info from "./index.js"

document.querySelector("#mail1").innerHTML = info.mail
document.querySelector("#mail2").innerHTML = `<a href="mailto:${info.mail}">${info.mail}</a>
<br>`
document.querySelector("#mail3").innerHTML = `<a href="mailto:${info.mail}">${info.mail}</a>`
document.querySelector("#adres1").innerHTML = info.adres
document.querySelector("#adres2").innerHTML = info.adres
document.querySelector("#phone1").innerHTML = info.phone
document.querySelector("#phone2").innerHTML = info.phone

document.getElementsByTagName("title")[0].innerHTML = info.title

document.querySelector("#social_media_top").innerHTML = `<a href="${info.facebook}" title="Facebook"><i class="fab fa-facebook white-color"></i></a>
<a href="${info.twitter}" title="Twitter"><i class="fab fa-twitter white-color"></i></a>
<a href="${info.linkedin}" title="LinkedIn"><i class="fab fa-linkedin-in white-color"></i></a>`
document.querySelector("#social_media_bottom").innerHTML = `<a href="${info.facebook}"><i class="fab fa-facebook-f"></i></a>
<a href="${info.twitter}"><i class="fab fa-twitter"></i></a>
<a href="${info.instagram}"><i class="fab fa-instagram"></i></a>`