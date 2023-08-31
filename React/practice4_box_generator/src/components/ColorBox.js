import {useState} from 'react'

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




    return (
        <div>
            <form onSubmit={createBox}>

            </form>







        </div>



    )
}