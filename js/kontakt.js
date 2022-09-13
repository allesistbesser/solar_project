import * as info from "./index.js"

let current_form = document.getElementById("formElem")

current_form.addEventListener("submit", function (event) {
  event.preventDefault()

  let data = new FormData(event.currentTarget)

  let formInfo = {};
  data.forEach(function (value, key) {
    formInfo[key] = value;
  });
  console.log(formInfo);

  const postData = async () => {
    try{
    const rawResponse = await fetch(`${info.backend_path}/comments/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formInfo)
    });
    const content = await rawResponse.json();
    current_form.reset()
    alert("Herzlichen Dank für Kontakt")
  }
  catch (error){
    alert('unerwartet fehler, bitte schreiben Sie uns ein Email')
  }
  }
  const getData = async () => {
    let response = await fetch(`${info.backend_path}/comments/`)
    let data = await response.json();
  console.log("get data",data);  
  }
   
  
 postData()
 .then(()=> getData())
//  .then(()=> alert("Herzlichen Dank für Kontakt"))
//  .catch(()=> alert('unerwartet fehler, bitte schreiben Sie uns ein Email'))

});

