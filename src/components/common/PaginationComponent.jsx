// import React from 'react';
// import _ from "lodash";
// import PropTypes from 'prop-types'
// import Pagination from '@material-ui/lab/Pagination';
// import { makeStyles, createStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       '& > *': {
//         marginTop: theme.spacing(2),
//       },
//     },
//   }),
// );

// const PaginationComponent = (props) => {
//     const classes = useStyles();
//     const {itemsCount, pageSize, onPageChange, currentPage} = props
//     // console.log(currentPage);


//     const pagesCount =Math.ceil(itemsCount / pageSize) 
//     // console.log(pageSize);
//     const pages = _.range(1, pagesCount + 1 )

//     return ( 
//         <>
//         <div className={classes.root}>
//           <Pagination count={10} color="primary" />
//         </div>
//         {/* <nav aria-label="Page navigation example">
//             <ul className="pagination">
//                 {pages.map(page => (
//                     <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
//                         <a onClick={()=>onPageChange(page)} className="page-link">
//                             {page}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </nav> */}
//         </>
//      );
// }

// PaginationComponent.propTypes= {
//     itemsCount: PropTypes.number.isRequired ,
//     pageSize :PropTypes.number.isRequired ,
//     onPageChange: PropTypes.func.isRequired,
//     currentPage:PropTypes.number.isRequired 
// }

// export default PaginationComponent;
 