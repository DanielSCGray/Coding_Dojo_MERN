import ProductForm from '../components/ProductForm';
import { ProductList } from '../components/ProductList';

import React from 'react'

const Home = () => {
    return (
        <div>
            <ProductForm />
            <ProductList />
        </div>
    )
}

export default Home