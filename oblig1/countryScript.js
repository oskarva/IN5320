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
    li.appendChild(document.createTextNode(countryName));

    let deleteButton = getDeleteButton(countryName);
    li.appendChild(deleteButton);

    li.setAttribute("class", "country-list-element");
    li.setAttribute("id", countryName)
    return li
};

function getDeleteButton(countryName){
    let deleteButton = document.createElement("button");
    
    deleteButton.appendChild(document.createTextNode("X"));
    deleteButton.setAttribute("class", "delete-button"); 
    deleteButton.addEventListener("click", function(){deleteElement(countryName)});


    return deleteButton;
};

function deleteElement(countryId){
    console.log(countryId);
    let listItem = document.getElementById(countryId);
    console.log(listItem);
    document.getElementById("country-list").removeChild(listItem);
};