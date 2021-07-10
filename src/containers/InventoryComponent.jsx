import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 600,
    maxWidth: 800,
    border:"2px",
    marginLeft: "20vw"
  },
});
const InventoryComponent = () => {
    const classes = useStyles();
    const products = useSelector((state) => state.allProducts.products);
    const renderTable = products.map((product) =>{
        const {price, title, number} = product
        return (
                <TableRow key={product.id}>
                  <TableCell align="left">{title}</TableCell>
                  <TableCell align="left">{price *26000}</TableCell>
                  <TableCell align="left">{number} عدد</TableCell>
                </TableRow>

                
        )
    })
    
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">نام کالا</TableCell>
                        <TableCell align="left">قیمت </TableCell>
                        <TableCell align="left"> موجودی </TableCell>
                    </TableRow>
                </TableHead>
          <TableBody>
            {renderTable}
          </TableBody>
      </Table>
    </TableContainer>
    )
}

export default InventoryComponent


