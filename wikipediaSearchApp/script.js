let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    let {link, title, description} = result;
    
    //Creating search result item 
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("mb-5");
    
    //creating title Element
    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.textContent = title;
    titleEl.target = "_blank";
    titleEl.classList.add("text-[22px]", "hover:underline", "text-[#007bff]");
    resultItemEl.appendChild(titleEl);
    searchResultsEl.appendChild(resultItemEl);
    
    //creating break element 
    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);
    
    //creating url Element
    let urlEl = document.createElement("a");
    urlEl.href = link;
    urlEl.textContent = link;
    urlEl.target = "_blank";
    urlEl.classList.add("text-[#006621]", "no-underline");
    resultItemEl.appendChild(urlEl);
    
    //creating description Element
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("text-[#444444]", "text-sm", "mt-1");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);
}

function displayResults(searchResults) {
    spinnerEl.classList.add("hidden");
    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }
}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.remove("hidden");
        searchResultsEl.textContent = "";
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function (jsonData) {
            let {search_results} = jsonData;
            displayResults(search_results);
        });
    }
}
searchInputEl.addEventListener("keydown", searchWikipedia);