import React from "react";
import { useDataQuery } from '@dhis2/app-runtime';
import { Menu, MenuItem } from '@dhis2/ui';


const request = {
    request0: {
      resource: "/dataSets",
      params: {
        fields: ["id",
        "displayName",
        "created",
        ],
        paging: "false"
      }
    }
  }
  
  export function Datasets() {
      const { loading, error, data } = useDataQuery(request)
      if (error) {
          return <span>ERROR: {error.message}</span>
      }
  
      if (loading) {
          return <span>Loading...</span>
      }
  
      if (data) {
         console.log("API response:",data)
         return <><h3>Datasets:</h3>
                <Menu>
                {data.request0.dataSets.map((dp, index) => (
                        <MenuItem key={index} label={dp.displayName} />
                    ))}
                </Menu>
         </>
      }
  }