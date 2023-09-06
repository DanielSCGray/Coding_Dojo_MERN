import { useParams } from "react-router-dom";


const DisplayInfo = (props) => {

    const {starData} = props; 

    const { subject } = useParams();
    console.log(starData)

    if (!starData.name) {
        return null
    }

    if (subject === 'people') {
        return (
            <div>
                <h1>{starData.name}</h1>
                <h3>Height: {starData.height} cm *multiply by .3937 for height in Freedom Units*</h3>
                <h3>Mass: {starData.mass} kg *multiply by 2.204 for same*</h3>
                <h3>Hair Color: {starData.hair_color}</h3>
                <h3>Skin Color: {starData.skin_color}</h3>
            </div>
        )
    }
    else if (subject === 'planets'){
        return(
            <div>
                <h1>{starData.name}</h1>
                <h3>Climate: {starData.climate}</h3>
                <h3>Terrain: {starData.terrain}</h3>
                <h3>Surface Water: {starData.surface_water}</h3>
                <h3>Population: {starData.population}</h3>
            </div>
        )

    }
}

export default DisplayInfo;