import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from "../redux/actions/productAction"
import axios from "axios"
import InventoryComponent from './InventoryComponent';

const InventoryListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch()
    const fetchProducts = async () =>{
        // const respone = await axios.get("https://fakestoreapi.com/products")
        const respone = await axios.get("http://localhost:5000/products")
        .catch((err) => {
            console.log("Err", err);
        })
        dispatch(setProducts(respone.data));
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    // console.log("products", products);
    // console.log("he");
    return (
        <div>
            <InventoryComponent/>
        </div>
    )
}

export default InventoryListing
