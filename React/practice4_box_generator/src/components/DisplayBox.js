

const DisplayBox = (props) => {
    



    return (
        <div className='container'>
            {
                props.boxList.map( (box, i) =>
                <div key={i}  style={{margin: 10, display: 'inline-flex', height: box.size +'px',width: box.size +'px',background: box.color, }}></div>)
            }
        </div>
    )
}

export default DisplayBox;