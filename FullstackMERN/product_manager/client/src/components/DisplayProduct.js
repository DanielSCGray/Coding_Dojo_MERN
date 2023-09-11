import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const DisplayProduct = () => {

    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect( () => { axios.get(`http://localhost:8000/api/products/${id}`)
    .then(res => setProduct(res.data))
    .catch(err => console.log(err))
});
    const deleteProduct = (targetID) => {
        axios.delete(`http://localhost:8000/api/products/${targetID}`)
        .then(res => {
            console.log(res)
            navigate('/products')})
        .catch(err => console.log(err))
}
    if (product) {
        
        return (
            <div>
                <p>{product.title}</p>
                <p>Price : {product.price}</p>
                <p>Description : {product.description}</p>
                <button className='btn btn-danger btn-sm m-2' onClick={ () => deleteProduct(product._id)}>Delete</button>
            </div>
        )
    }
}

export default DisplayProduct