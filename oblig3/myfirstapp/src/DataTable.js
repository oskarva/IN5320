import { styleClasses } from "./DataTable.module.css";
import { useEffect, useState, useMemo } from "react";
import { useDataQuery } from '@dhis2/app-runtime';
import { Menu, MenuItem, Table, TableHead, TableRowHead, TableBody, TableRow, TableCell, TableCellHead } from '@dhis2/ui';


function request(id) {
    return {request0: {
      resource: "/dataSets",
      params: {
        fields: "id,displayName,created",
        paging: "false",
        filter: "id:eq:" + {id},
      },
    }
  };}
  

export function DataTable(props){
    const query = useMemo(() => {
        return {
          request0: {
            resource: "/dataSets",
            params: {
              fields: "id,displayName,created",
              paging: "false",
              filter: `id:eq:${props.currentID}`, // Note the template string
            },
          }
        };
      }, [props.currentID]);
    //const newID = props.id;

    //newData = useDataQuery(request(props.currentID));
    const { loading, error, data } = useDataQuery(query);

    useEffect(() => {

        console.log("new:" + props.currentID);
        console.log(data);
        console.log("stop");
    }, [props.currentID, data]);

    if (error) {
        console.log(error);
        return <span>ERROR: {error.message}</span>
    }

    if (loading) {
        console.log("ddd");
        return <span>Loading...</span>
    }

    return <div></div>

}

//export default DataTable;