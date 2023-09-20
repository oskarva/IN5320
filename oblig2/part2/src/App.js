import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./Table.js";
import Input from "./Input.js";

function App() {
  /* Create state:
        - apiData: List containing dictionaries of countries from API.
        - searchQuery: The query parameter that should be added to &search=
        - pageNumber: The page that is requested
  */

  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(); // Default = No search query
  const [pageNumber, setPageNumber] = useState(1); //Default = Page 1
  const [pageSize, setPageSize] = useState(10);

  const dropdown = <select onChange={(x) => setPageSize(x.target.value)}>
    <option value="10" >10</option>
    <option value="20" >20</option>
    <option value="30" >30</option>
    <option value="40" >40</option>
    <option value="50" >50</option>
    <option value="100">100</option>
  </select>;

  useEffect(() => {
    // All parameters are appended to this URL.
    let apiQuery = "https://dhis2-app-course.ifi.uio.no/api?";//"https://dhis2-app-course-api.ifi.uio.no/api?";

    // If searchQuery isn't empty add &search=searchQuery to the API request.
    if (searchQuery) {
      apiQuery = apiQuery + "&search=" + searchQuery;
    }

    // Add what page we are requesting to the API request.
    apiQuery = apiQuery + "&page=" + pageNumber;

    // Add the size of the pages
    apiQuery = apiQuery + "&pageSize=" + pageSize;

    // Query data from API.
    console.log("Querying: " + apiQuery);
    fetch(apiQuery)
      .then((results) => results.json())
      .then((data) => {
        // Then add response to state.
        setApiData(data);
      });
  },
  [searchQuery, pageNumber, pageSize]); // Array containing which state changes that should re-reun useEffect()

  return (
    <div className="App">
      <h1>Country lookup</h1>
      <Input searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Table apiData={apiData} />
      Page {pageNumber} of {apiData.pager ? apiData.pager.pageCount : '...'}
      <br/>
      Results per page: {dropdown}
    </div>
  );
}

export default App;
