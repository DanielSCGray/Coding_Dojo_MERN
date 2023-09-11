import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export const ProductList = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect( () => {axios.get('http://localhost:8000/api/products')
        .then(response => setAllProducts(response.data.products))
        .catch(err => console.log(err))
}, []);

    const deleteProduct = (targetID) => {
        axios.delete(`http://localhost:8000/api/products/${targetID}`)
        .then( removeFromDOM(targetID))
        .catch(err => console.log(err))
    }

    const removeFromDOM = deletedID => {
        const filteredList = allProducts.filter((eachProduct, idx) => eachProduct._id !== deletedID)
        setAllProducts(filteredList)

    }

    return (
        <div>
            <h1>All Products:</h1>
            {
                allProducts.map((eachProduct, idx) =>{
                    return(
                        <div key={idx}>
                            <h4>
                                <Link to={`/products/${eachProduct._id}`} >{eachProduct.title}</Link>
                                
                                <button className='btn btn-danger btn-sm m-2' onClick={ () => deleteProduct(eachProduct._id)}>Delete</button>
                                <Link to={`/${eachProduct._id}/edit`} >Edit</Link>
                            </h4>
                            {/* <p>Price: {eachProduct.price}</p>
                            <p>Description: {eachProduct.description}</p> */}
                        </div>
                    )
                }
            )}

        </div>
    )
}
