

const PokeFetch = (props) => {




    const fetchAll = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
            props.getList(response.results)
        }).catch(err=>{
            console.log(err);
        });
    }

    return (
        <div>

            <button className='btn btn-light btn-sm' onClick={ () => fetchAll()}>Fetch Pokemon!</button>
        </div>
    )

}
export default PokeFetch;
