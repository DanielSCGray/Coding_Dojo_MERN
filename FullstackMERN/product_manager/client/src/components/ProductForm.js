import axios from 'axios';
import {useState} from 'react';


const ProductForm = (props) => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(Number);
    const [description, setDescription] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }


    return (
        <div className='m-3'>
            <form className="form-control" onSubmit={handleSubmit}>
                <label className="form-label">Title:</label>
                <input className="form-control" name={title} onChange={(e)=> {setTitle(e.target.value)}} />
                <label className="form-label">Price:</label>
                <input className="form-control" type='number' value={price} onChange={(e) => {setPrice(e.target.value)}} />
                <label className="form-label">Description:</label>
                <input className="form-control" name={description} onChange={(e)=> {setDescription(e.target.value)}} />
                <input className="form-control bg-primary" type='submit' value='Create' />
            </form>
        </div>
    )
}
export default ProductForm;