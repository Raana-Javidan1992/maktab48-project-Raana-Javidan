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
    await axios.delete(`http://localhost:5000/products/${id}`).then(res=>{
        console.log(res);
    })     
};



export const addProduct = async (prodoct) => {
    const data = await axios.post(
        `http://localhost:5000/product`,prodoct)
        .then((res) =>{return res.data}).catch((err)=> console.log(err))
};

export const updateProduct  = async (prodoct) => {
    const data = await axios.put(
        `http://localhost:5000/product/${prodoct.id}`,prodoct)
        .then((res) =>{return res.data}).catch((err)=> console.log(err))
};