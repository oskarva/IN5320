window.onload = function(){
    const submitButton = document.getElementById("add");
    submitButton.onclick = submitFunction;

    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", function(){searchForCountries()});

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
    let listItem = document.getElementById(countryId);
    document.getElementById("country-list").removeChild(listItem); //replace with listItem.remove();?
};

function searchForCountries(){
    let searchBar = document.getElementById("search-bar");
    let searchText = searchBar.value; //TODO: Does this get the text?
    searchText = searchText.toLowerCase();
    if (searchText.length == 0){
        return;
    };

    
    //Get text from all li elements
    //make dict["text":li element]
    //hide li elements

    //checkArrayFo...

    //hide li-elements not in list
};

function checkArrayForSearchWord(ar, searchWord){
    let newAr = [];

    for(let i = 0; i < ar.length; i++){
        if (checkElementForSearchWord(ar[i], searchWord)){
            newAr.push(ar[i]);
        };
    };

    return newAr;
};

function checkElementForSearchWord(element, searchWord){
    return element.startsWith(searchWord); //element.value instead?
};

//onchange