function Table(props) {
  console.log(props.apiData);

  if (!props.apiData.results) {
    // If the API request isn't completed return "loading...""
    return <p>Loading...</p>;
  } else {
      const rows = props.apiData.results.map((result) =>
          <tr>
              <td>{result.Country}</td>
              <td>{result.Continent}</td>
              <td>{result.Population}</td>
              <td>{result.PopulationGrowth}</td>
          </tr>
      );
      console.log(props);
    // Write your code here:
    return <table>
        <thead>
        <tr>
            <th>Country</th>
            <th>Continent</th>
            <th>Population</th>
            <th>Population Growth</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
    </table>;
  }
}

export default Table;
