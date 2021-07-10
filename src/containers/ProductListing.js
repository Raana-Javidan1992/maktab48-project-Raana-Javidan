import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from "../redux/actions/productAction"
import axios from "axios"
import ProductComponent from './ProductComponent';
import { getAllProducts } from "../api/products";


const ProductListing = () => {
    const products = useSelector((state) => state);
    // const dispatch = useDispatch()
    // const getAllProducts = async () =>{
    //     // const respone = await axios.get("https://fakestoreapi.com/products")
    //     const respone = await axios.get("http://localhost:5000/products")
    //     .catch((err) => {
    //         console.log("Err", err);
    //     })
    //     dispatch(setProducts(respone.data));
    // }

    // useEffect(() => {
    //     getAllProducts().then((res)=> dispatch(setProducts),
    //     console.log(res.data))
    // }, [])

    // console.log("products", products);
    // console.log("he");
    return (
        <div>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing
