import * as info from "./index.js"

document.querySelector("#adres").innerHTML = info.adres
document.querySelector("#arbeitszeit").innerHTML = info.arbeitszeit
document.querySelector("#mail").innerHTML = `Wir sind immer für Sie da, um Ihr Problem zu lösen. Mailen Sie uns: <a href="mailto:${info.mail}">${info.mail}</a>`