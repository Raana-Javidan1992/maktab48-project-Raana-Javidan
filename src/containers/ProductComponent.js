import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"


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
const ProductComponent = () => {
    const classes = useStyles();
    const products = useSelector((state) => state.allProducts.products);
    const renderTable = products.map((product) =>{
        const {image, title, category} = product
        return (
                <TableRow key={product.id}>
                  <TableCell component="th" scope="row">
                    <img src={image} title={title} style={{width: "100px", height:"100px"}}/>
                  </TableCell>
                  <TableCell align="left">{title}</TableCell>
                  <TableCell align="left">{category}</TableCell>
                  <TableCell align="left">ویرایش/حذف</TableCell>
                </TableRow>

                
        )
    })
    
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>تصویر</TableCell>
                        <TableCell align="left">نام کالا</TableCell>
                        <TableCell align="left">دسته بندی</TableCell>
                        <TableCell align="left">ویرایش / حذف</TableCell>
                    </TableRow>
                </TableHead>
          <TableBody>
            {renderTable}
          </TableBody>
      </Table>
    </TableContainer>
    )
}

export default ProductComponent


