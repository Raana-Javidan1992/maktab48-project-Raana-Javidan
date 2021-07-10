import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {  getProducts, deleteProduct } from "../redux/actions/productAction"
import SimpleModal from "../components/simpleModal"
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch()

  const classes = useStyles();


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
    // window.location.reload()
    console.log("jhguy");
  }
  
  const handleEditAProduct= (id) => {
    console.log(id);
  }

  useEffect(()=>{
    dispatch(getProducts())
  },[])

  const renderTable = products?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) =>{
      const {image, title, category} = product
      return (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">
                  <img src={image} title={title} style={{width: "100px", height:"100px"}} alt={title}/>
                </TableCell>
                <TableCell align="left">{title}</TableCell>
                <TableCell align="left">{category}</TableCell>
                <TableCell align="left">
                <IconButton aria-label="edit" onClick={(e)=> handleEditAProduct(product.id)}>
                  <SimpleModal/>
                 </IconButton>
                    <IconButton aria-label="delete" onClick={(e)=> handleDeleteAProduct(product.id)}>
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


