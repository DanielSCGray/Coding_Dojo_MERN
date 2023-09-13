import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SubjectnameForm from '../components/SubjectnameForm';

const EditSubjectname = (props) => {

    //for each key: const[key, setKey] = useState(w/e data type);
    //will then pass them in as props for filling fields when editing
    const [name, setName] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect( () => { axios.get(`http://localhost:8000/api/subjectnames/${id}`)
    .then(res => {
        let oneSubjectname = (res.data);
        setName(oneSubjectname.name);
        //set each additional k/v setKey(oneSubjectname.key)
        console.log(name)
    })
    .catch(err => console.log(err))
}, []);
    //add in each value we're lifting  (newName, nextNewVal)
    const makeEdit = (newName) => {
        
        axios.put(`http://localhost:8000/api/subjectnames/${id}`, {
            name: newName
            //for each added val key: newVal
        })
            .then(res=> {
                console.log(res);
                navigate('/subjectnames')
            })
            .catch(err=>{
                setErrorMsg(err.response.data.message)
            })
    }


    return (
        <div className='m-3'>
            <Link to={'/subjectnames'} >Home</Link>
            <h4>Edit this subjectname:</h4>
            <div>{errorMsg}</div>
            <SubjectnameForm action={makeEdit} subjectnameName={name} />
        </div>
    )
}
export default EditSubjectname;