import { useState } from "react";
import ColorBox from "./ColorBox";

const DisplayBox = (props) => {
    



    return (
        <div className='container'>
            {
                props.boxList.map( (box, i) =>
                <div key={i} style={box}></div>)
            }
        </div>
    )
}

export default DisplayBox;