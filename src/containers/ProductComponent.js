import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios"
import api from "../api/products"
import _ from 'lodash'
import { setProducts, selectedProduct, deleteSelectedProduct, getProducts, getAProduct, deleteProduct } from "../redux/actions/productAction"

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles({
  table: {
    minWidth: 600,
    maxWidth: 800,
    border:"2px",
    marginLeft: "20vw"
  },
});
const ProductComponent = () => {
  // const [sortColumn, setSortColumn] = useState({path:'category', order:'asc'})
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const sorted = _.orderBy(products, [sortColumn.path], [sortColumn.order]);
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch()

  const classes = useStyles();

  // const allProducts= paginate(sorted, currentPage, pageSize)
  const totalCount = products.length

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const handleDeleteAProduct= (id) =>{
    dispatch(deleteProduct(id))
    dispatch(getProducts())
  }

  useEffect(()=>{
    dispatch(getProducts())
  },[])

  const renderTable = products?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) =>{
      const {image, title, category} = product
      return (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">
                  <img src={image} title={title} style={{width: "100px", height:"100px"}}/>
                </TableCell>
                <TableCell align="left">{title}</TableCell>
                <TableCell align="left">{category}</TableCell>
                <TableCell align="left">
                <IconButton aria-label="edit">
                            <EditIcon/>
                          </IconButton>
                          <IconButton aria-label="delete" onClick={(e)=> handleDeleteAProduct}>
                            <DeleteIcon/>
                          </IconButton>
                </TableCell>
              </TableRow>             
      )
  })
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">تصویر</TableCell>
                        <TableCell align="left">نام کالا</TableCell>
                        <TableCell align="left">دسته بندی</TableCell>
                        <TableCell align="left">  ویرایش/ حذف</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {renderTable}
                </TableBody>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={products?.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  labelRowsPerPage="تعداد سطرهای هر صفحه"
                />
      </Table>
    </TableContainer>
    )
}

export default ProductComponent


