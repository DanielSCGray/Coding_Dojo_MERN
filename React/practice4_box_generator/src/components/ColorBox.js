import { useState } from 'react';

const ColorBox = (props) => {

    
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');



    const createBox = (e) => {
        e.preventDefault();
        const newBox = {color, size};
        props.onNewBox(newBox);
        setColor('');
        setSize('');
    };



    return (
        <div>
            <form onSubmit={createBox} className='form-control'>
                <div className='mb-3'>
                    <label className='form-control'>Box Color:</label>
                    <input className='form-control' type='text' value={color} onChange={(e) => setColor(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label className='form-control'>Set Box Size :</label>
                    <input className='form-control' type='text' value={size} onChange={(e) => setSize(e.target.value)}/>
                </div>
                <input className='form-control bg-primary' type='submit' value='Make My box'/>

            </form>

            
        </div>
    )
}
export default ColorBox;