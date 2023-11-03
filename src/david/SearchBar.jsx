import { useContext, useEffect } from 'react'
import { davidKey } from '../../keys'
import './searchBar.css'
import context from './context/Context';
import PageButtons from './PageButtons';
import { Link } from 'react-router-dom';

export default function SearchBar(){

    const { state, dispatch } = useContext(context);

    const loadSearch = async () => {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${state.searchValue}&client_id=${davidKey}&page=${state.page}&per_page=${state.per_page}`)
        const data = await response.json()

        console.log(data)

        dispatch({
            type: 'searchData/set',
            payload: data
        })


    }

    useEffect(() => {
        loadSearch()
    }, [state.searchValue, state.page])


    const handleSearch = () => {    
        dispatch({
            type:'searchValue/set',
            payload: state.searchValue
        })
        console.log(state.searchValue)
    }
    
    console.log(state.searchValue)
    console.log(state.searchData)
    return(
        
<>
            <div className='search-container'>
                <input type="text" placeholder="Search for an image" value={state.searchValue} onChange={ ev => dispatch({
                    type: 'searchValue/set',
                    payload: (ev.target.value)
                })} />
                <Link to={"/searchedImages"}> <button onClick={ handleSearch }>Search</button> </Link>   <br />
             
            </div>
                <PageButtons />
</>
    )
}