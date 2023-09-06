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
    let searchText = searchBar.value; 
    searchText = searchText.toLowerCase();
    if (searchText.length == 0){
        return; //TODO: call showAll
    };

    let targets = document.querySelectorAll("ul#country-list li");
    let dict = {}
    targets.forEach(function(li){
        let liText = li.innerHTML.split("<")[0];
        dict[liText] = li
        li.remove();
    });

    let countriesToShow = checkArrayForSearchWord(Object.keys(dict), searchText);
    console.log(countriesToShow);

    countriesToShow.forEach(function(toShow){ //TODO: display:none for items not in this list, instead of deleting items
        console.log(toShow);
        console.log(dict[toShow]);
        document.getElementById("country-list").appendChild(dict[toShow]);
    });
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