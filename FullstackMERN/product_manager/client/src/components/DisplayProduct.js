import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const DisplayProduct = () => {

    const [product, setProduct] = useState({});

    const {id} = useParams();

    useEffect( () => { axios.get(`http://localhost:8000/api/products/${id}`)
    .then(res => setProduct(res.data))
    .catch(err => console.log(err))
});

    return (
        <div>
            <p>{product.title}</p>
            <p>Price : {product.price}</p>
            <p>Description : {product.description}</p>
        </div>
    )
}

export default DisplayProduct