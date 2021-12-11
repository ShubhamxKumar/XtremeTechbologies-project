import React from 'react'
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button
    
 } from '@material-ui/core';
 import { withStyles } from "@material-ui/core/styles";

 const styles = theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {
      minWidth: 700
    }
  });

  
function Tabledesign({rowsdata}) {
    return (
        <div>
         {rowsdata.length? <TableContainer component={Paper}>
      <Table sx={{ minWidth:900 }} aria-label="customized table">
        <TableBody>
        <TableRow>
        <b>Waypoints</b>
          {rowsdata.map((row) => (
              <TableCell align="right">
                {row.waypoints}
              </TableCell>
           
          ))}
           </TableRow>
           <TableRow>
               <b>Longitude</b>
        {rowsdata.map((row) => (
          
              <TableCell align="right">{row.longitude}</TableCell>
           
          ))}
            </TableRow>
            <TableRow>
                <b>Latitude</b>
      {rowsdata.map((row) => (

              <TableCell align="right">{row.latitude}</TableCell>
           
          ))}    
   </TableRow>
   
   <TableRow>
   <b>Delete</b>
   {rowsdata.map((row) => (

            <Button variant="contained" >{row.waypoints}
            </Button>
      ))} 
   </TableRow>

        </TableBody>
      </Table>
    </TableContainer>:null}
     
        </div>
    )
}

export default Tabledesign
