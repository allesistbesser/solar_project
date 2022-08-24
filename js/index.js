let current_form = document.getElementById("formElem")

current_form.addEventListener("submit", function (event) {
  event.preventDefault()

  data = new FormData(event.currentTarget)

  let formInfo = {};
  data.forEach(function (value, key) {
    formInfo[key] = value;
  });
  console.log(formInfo);

  const postData = async () => {
    const rawResponse = await fetch('http://127.0.0.1:8000/comments/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formInfo)
    });
    const content = await rawResponse.json();
    console.log("rawresponse",content);
  }
  const getData = async () => {
    let response = await fetch('http://127.0.0.1:8000/comments/')
    let data = await response.json();
  console.log("get data",data);  
  }
   
  
 postData()
 .then(()=> getData())



});