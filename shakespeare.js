var userText= document.querySelector("#user-text");
var btntranslate = document.querySelector("#btn-translate");
var outputText = document.querySelector("#output-text");

const serverURL = "https://api.funtranslations.com/translate/shakespeare.json";
// function to construct query url
function constructURL(inputText){
    return serverURL+"?"+"text="+inputText;
}
//add event listener to translation button
btntranslate.addEventListener("click", clickHandler);

//error handler function
function errorHandler(error){
    alert("Something wrong on server side! Please try again later.")
}


//clickHandler callback function
function clickHandler(){
    fetch(constructURL(userText.value)).then(response => response.json())
    .then(json =>{
        outputText.innerText=json.contents.translated
    })
    .catch(errorHandler);
}
