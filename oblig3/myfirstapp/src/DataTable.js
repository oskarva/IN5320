import { styleClasses } from "./DataTable.module.css";
import { useEffect, useState, useMemo } from "react";
import { useDataQuery } from '@dhis2/app-runtime';
import { Menu, MenuItem, Table, TableHead, TableRowHead, TableBody, TableRow, TableCell, TableCellHead } from '@dhis2/ui';


export function DataTable(props){
    //const newID = props.id;

    //newData = useDataQuery(request(props.currentID));
    //var { loading, error, data } = useDataQuery(query);
    //const data = props.data;
//
    //useEffect(() => {
//
    //    console.log("new:" + props.currentID);
//
    //    console.log(data);
    //    console.log("stop");
    //}, [props.currentID]);
//
    //if (error) {
    //    console.log(error);
    //    return <span>ERROR: {error.message}</span>
    //}
//
    //if (loading) {
    //    console.log("ddd");
    //    return <span>Loading...</span>
    //}

    return <>
        <div >
            <Table >
              <TableHead>
                <TableRowHead>
                  <TableCellHead>
                    id
                  </TableCellHead>
                  <TableCellHead>
                    displayName
                  </TableCellHead>
                  <TableCellHead>
                    created
                  </TableCellHead>  
                </TableRowHead>
              </TableHead>  
              <TableBody>
                <TableRow>
                  <TableCell>{props.id}</TableCell>
                  <TableCell>{props.displayName}</TableCell>
                  <TableCell>{props.created}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
        </div>
    </>

}

//export default DataTable;