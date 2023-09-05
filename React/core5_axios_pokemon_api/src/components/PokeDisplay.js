const PokeDisplay = (props) => {




    return (
        <div>
            

            <ul>
                {
                    props.pokeList.map( (pokemon, idx) => {
                        return(
                            <li key={idx}>{pokemon.name}</li>
                        )
                    }
                    )
                }
                
                
            </ul>
        </div>

    )

}
export default PokeDisplay;