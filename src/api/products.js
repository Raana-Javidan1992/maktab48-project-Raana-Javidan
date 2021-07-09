import axios from "axios";

export const getAllProducts = async ()=>{
    let res = await axios({
        method: "get",
        url: "http://localhost:5000/products",
        headers:{
            "content-type" : "application/json"
        }
    }).catch((err) => console.log(err));
    return res;
};

export const getAProductById = async (id)=>{
    let res = await axios({
        method: "get",
        url: `http://localhost:5000/products/${id}`,
        headers:{
            "content-type" : "application/json"
        },
    }).catch((err) => console.log(err));
    return res;
};


export const deleteProductById = async (id)=>{
    await axios.delete( `http://localhost:5000/products/${id}`)
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })     
};