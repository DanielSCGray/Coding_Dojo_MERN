import {useState} from 'react';


const StarSearch = (props) => {

    const [subject, setSubject] = useState('people');
    const [id, setId] = useState(Number);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(subject)
        props.getSearch(subject, id);




    }


    return (
        <div className='m-3'>
            <form className="form-control" onSubmit={handleSubmit}>
                <label className="form-label">Search for:</label>
                <select className="form-control" name={subject} onChange={(e)=> {setSubject(e.target.value)}}>
                    <option className="form-control" value='people' selected>People</option>
                    <option className="form-control" value='planets' >Planets</option> 
                </select>
                <label className="form-label">ID:</label>
                <input className="form-control" type='number' value={id} onChange={(e) => {setId(e.target.value)}} />
                <input className="form-control bg-primary" type='submit' value='Search' />
            </form>
        </div>
    )
}
export default StarSearch;