import axios from 'axios';
import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EditSubjectname = (props) => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(Number);
    const [description, setDescription] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect( () => { axios.get(`http://localhost:8000/api/subjectnames/${id}`)
    .then(res => {
        let oneSubjectname = (res.data);
        setTitle(oneSubjectname.title);
        setPrice(oneSubjectname.price);
        setDescription(oneSubjectname.description)
    })
    .catch(err => console.log(err))
}, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.put(`http://localhost:8000/api/subjectnames/${id}`, {
            title,
            price,
            description
        })
            .then(res=> {
                console.log(res);
                navigate('/subjectnames')
            })
            .catch(err=>console.log(err))
    }


    return (
        <div className='m-3'>
            <form className="form-control" onSubmit={handleSubmit}>
                <label className="form-label">Title:</label>
                <input className="form-control" name={title} value={title} onChange={(e)=> {setTitle(e.target.value)}} />
                <label className="form-label">Price:</label>
                <input className="form-control" type='number' value={price} onChange={(e) => {setPrice(e.target.value)}} />
                <label className="form-label">Description:</label>
                <input className="form-control" name={description} value={description} onChange={(e)=> {setDescription(e.target.value)}} />
                <input className="form-control bg-primary" type='submit' value='Update' />
            </form>
        </div>
    )
}
export default EditSubjectname;