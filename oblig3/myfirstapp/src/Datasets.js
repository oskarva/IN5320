const request = {
    request0: {
      resource: "/dataSets",
      params: {
        fields: "id,displayName,created",
        paging: "false"
      }
    }
  }
  
  const sendRequest = () => {
      const { loading, error, data } = useDataQuery(request)
      if (error) {
          return <span>ERROR: {error.message}</span>
      }
  
      if (loading) {
          return <span>Loading...</span>
      }
  
      if (data) {
         console.log("API response:",data)
         //To-do: return a component using the data response 
      }
  }