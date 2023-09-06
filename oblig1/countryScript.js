window.onload = function(){
    const submitButton = document.getElementById("add");
    submitButton.onclick = submitFunction;

}

function submitFunction(){
    let countryInp = document.getElementById("country-input");
    let txt = countryInp.value;

    countryInp.value = "";

    let countryList = document.getElementById("country-list");
    let elementToAdd = getCountryElement(txt);

    countryList.appendChild(elementToAdd);

};

function getCountryElement(countryName){
    

    let li = document.createElement("li");
    li.value = countryName;
    li.appendChild(document.createTextNode(countryName));
    li.setAttribute("class", "country-list-element")
    return li
};