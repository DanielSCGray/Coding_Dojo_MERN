import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SubjectnameForm = (props) => {

    //STRUCTURE: each form data point gets a state, a prop to set it to, and gets called by props.action

    const [name, setName] = useState('');
    const navigate = useNavigate();
    //a __Name prop can be entered through the views page using the form
    const subjectnameName = props.subjectnameName;
    //this conditional allows us to populate fields when editing + ignore when creating
    if(!name && subjectnameName){
        setName(subjectnameName)
    }
    


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        //the action function is specified on views page (likely a create or edit)
        //add each form field after name as needed
        props.action(name)
    }


    return (
        <div className='m-3'>
            <form className="form-control" onSubmit={handleSubmit}>
                <label className="form-label">Name:</label>
                <input className="form-control" value={name} onChange={(e)=> {setName(e.target.value)}} />
                <div>
                    <button className='btn btn-warning btn-sm m-2' onClick={ () => navigate('/subjectnames')}>Cancel</button>
                    <input className="form-control bg-primary" type='submit' value='Submit' />
                </div>
            </form>
        </div>
    )
}
export default SubjectnameForm;