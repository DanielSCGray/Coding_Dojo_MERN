import { useState } from 'react';

const ColorBox = (props) => {

    const [boxList, addBox] = useState([]);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');



    const createBox = (e) => {
        e.preventDefault();
        const newBox = {color, size}
        setColor('');
        setSize('');
        addBox([...boxList, newBox])

    }

    // const displayBoxes = (array) => {
    //     let output = '';
    //     array.forEach(box => {
    //         output += <div style='color: blue; height: 50px' ></div>
    //         console.log(box.color)
    //     });
    //     return output;
    // }




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
                <input className='form-control' type='submit' value='Make My box'/>

            </form>

            
        </div>
    )
}
export default ColorBox;