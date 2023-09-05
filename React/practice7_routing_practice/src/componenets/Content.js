import {useParams} from 'react-router-dom';

const Content = (props) => {

    const {val1, val2, val3} = useParams();

    if(!isNaN(val1)) {
        return(
            <h1>The number is: {val1}</h1>
        )
    }
    else {
        return(
            <h1 style={{ color: `${val2}`, background: `${val3}`}}>The word is: {val1}</h1>
        )


    }
}

export default Content;