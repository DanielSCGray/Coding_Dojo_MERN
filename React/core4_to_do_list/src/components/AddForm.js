import {useState} from 'react';


const AddForm = (props) => {

    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {description, isDone: false}
        props.onNewTask(newTask);
        setDescription('');
    }


    return (
    <div>
        <form onSubmit={handleSubmit} className='form-control mb-3'>
            <div className='mb-3'>
                <label className='form-label'>Set a new goal:</label>
                <input className='form-control' type='text' value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <input className='form-control bg-primary' type='submit' value='Add'/>

        </form>

        
    </div>
    )


}

export default AddForm;