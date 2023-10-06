import React, { useState } from "react";
import { useDataQuery } from '@dhis2/app-runtime';
import { Menu, MenuItem, Table, TableHead, TableRowHead, TableBody, TableRow, TableCell, TableCellHead } from '@dhis2/ui';
import { DataTable } from "./DataTable.js"
import styles from "./Datasets.module.css";


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
      const [currentID, setID] = useState(null);

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
                <div className={currentID === null ? styles['container full-width'] : styles.container}>
                  <div className={currentID === null ? styles['menu-section full-width'] : styles['menu-section']}>
                    <Menu>
                    {data.request0.dataSets.map((dp, index) => (
                            <MenuItem key={index} 
                            label={dp.displayName} 
                            onClick={() => setID(currentID === dp.id ? null : dp.id)} >
                            </MenuItem>
                        ))}
                    </Menu>
                  </div>
                  <div className={styles['table-section']}>
                    {data.request0.dataSets.map((dp, index) => (
                      <DataTable  currentID={currentID} id={dp.id} displayName={dp.displayName} created={dp.created} />
                    ))}
                  </div>
                </div>
         </>
      }
  }